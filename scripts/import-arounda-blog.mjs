import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT_JSON = path.join(ROOT, "src/lib/data/blog-posts.json");
const COVER_DIR = path.join(ROOT, "public/blog");
const BASE = "https://arounda.agency";
const PAGE_PARAM = "1576070c_page";
const MAX_PAGES = 17;
const CONCURRENCY = 4;

function decode(html) {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

function strip(html) {
  return decode(html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function rewriteHref(href) {
  if (!href) return href;
  return href
    .replace(/^https?:\/\/arounda\.agency\/blog\//, "/blog/")
    .replace(/^https?:\/\/arounda\.agency\/industries\//, "/industries/")
    .replace(/^https?:\/\/arounda\.agency\/services\//, "/services/")
    .replace(/^https?:\/\/arounda\.agency\/works\//, "/works/")
    .replace(/^https?:\/\/arounda\.agency\/?$/, "/");
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
      accept: "text/html,application/xhtml+xml",
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

function extractListingItems(html) {
  const items = [];
  const blocks = html.split('class="blog-feed_block-feed-cms-item w-dyn-item"').slice(1);
  for (const block of blocks) {
    const slug = block.match(/href="\/blog\/([^"]+)"/)?.[1];
    if (!slug) continue;
    const title = strip(block.match(/class="blog-feed_block-feed-item-title"[^>]*>([\s\S]*?)<\/h2>/)?.[1] || "");
    const author = strip(
      block.match(/class="blog-feed_block-fiid-item-author-name"[^>]*>([\s\S]*?)<\/div>/)?.[1] || "",
    );
    const date = strip(
      block.match(/class="blog-feed_block-feed-item-read-time"[^>]*>([\s\S]*?)<\/div>/)?.[1] || "",
    );
    const categories = [...block.matchAll(/class="blog-feed_block-feed-item-tag"[^>]*>([\s\S]*?)<\/div>/g)]
      .map((m) => strip(m[1]))
      .filter(Boolean);
    const coverRemote =
      block.match(/class="blog-feed_item-image"[^>]*src="([^"]+)"/)?.[1] ||
      block.match(/<img src="([^"]+)"[^>]*class="blog-feed_item-image"/)?.[1] ||
      "";
    items.push({ slug, title, author, date, categories, coverRemote });
  }
  return items;
}

function extractRichHtml(html) {
  const marker = 'class="article-content_rich-text w-richtext"';
  const start = html.indexOf(marker);
  if (start === -1) return "";
  const gt = html.indexOf(">", start);
  const end = html.indexOf('<div class="article_fs-components"', gt);
  return html.slice(gt + 1, end === -1 ? gt + 20000 : end);
}

function htmlToBlocks(rawHtml) {
  const cleaned = rawHtml
    .replace(/<div class="w-embed"[\s\S]*?<\/div>/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "");

  const chunks = cleaned.match(/<(p|h2|h3|h4|ul|ol|blockquote|figure|h1)\b[\s\S]*?<\/\1>/g) || [];
  const blocks = [];

  for (const chunk of chunks) {
    if (chunk.startsWith("<p")) {
      const text = inlineToMarkdown(chunk.replace(/^<p[^>]*>/, "").replace(/<\/p>$/, ""));
      if (text) blocks.push({ type: "p", text });
    } else if (/^<h([2-4])/.test(chunk)) {
      const level = Number(chunk[2]);
      const text = strip(chunk);
      if (text) blocks.push({ type: "h", level, text });
    } else if (chunk.startsWith("<ul") || chunk.startsWith("<ol")) {
      const ordered = chunk.startsWith("<ol");
      const items = [...chunk.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/g)]
        .map((m) => inlineToMarkdown(m[1]))
        .filter(Boolean);
      if (items.length) blocks.push({ type: ordered ? "ol" : "ul", items });
    } else if (chunk.startsWith("<blockquote")) {
      const text = strip(chunk);
      if (text) blocks.push({ type: "quote", text });
    } else if (chunk.startsWith("<figure")) {
      const src = chunk.match(/<img[^>]+src="([^"]+)"/)?.[1];
      const alt = chunk.match(/<img[^>]+alt="([^"]*)"/)?.[1] || "";
      const caption = strip(chunk.match(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/)?.[1] || "");
      if (src) blocks.push({ type: "img", src, alt: decode(alt), caption });
    }
  }
  return blocks;
}

function inlineToMarkdown(html) {
  return decode(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<strong>([\s\S]*?)<\/strong>/gi, "**$1**")
      .replace(/<b>([\s\S]*?)<\/b>/gi, "**$1**")
      .replace(/<em>([\s\S]*?)<\/em>/gi, "*$1*")
      .replace(/<i>([\s\S]*?)<\/i>/gi, "*$1*")
      .replace(/<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
        const t = strip(text);
        const h = rewriteHref(href);
        return t ? `[${t}](${h})` : "";
      })
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function extFromUrl(url) {
  const clean = url.split("?")[0];
  const ext = path.extname(clean).toLowerCase();
  if ([".avif", ".webp", ".png", ".jpg", ".jpeg"].includes(ext)) return ext;
  return ".jpg";
}

async function downloadCover(url, slug) {
  if (!url) return `/blog/${slug}.jpg`;
  const ext = extFromUrl(url);
  const destName = `${slug}${ext}`;
  const dest = path.join(COVER_DIR, destName);
  if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
    return `/blog/${destName}`;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(String(res.status));
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    return `/blog/${destName}`;
  } catch (err) {
    console.warn("cover fail", slug, err.message);
    return `/blog/${slug}.jpg`;
  }
}

async function mapPool(items, limit, fn) {
  const out = new Array(items.length);
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      out[idx] = await fn(items[idx], idx);
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return out;
}

async function main() {
  fs.mkdirSync(COVER_DIR, { recursive: true });
  const seen = new Map();

  for (let page = 1; page <= MAX_PAGES; page++) {
    const url = page === 1 ? `${BASE}/blog` : `${BASE}/blog?${PAGE_PARAM}=${page}`;
    console.log("listing", page, url);
    const html = await fetchText(url);
    const items = extractListingItems(html);
    console.log("  found", items.length);
    if (!items.length) break;
    for (const item of items) {
      if (!seen.has(item.slug)) seen.set(item.slug, item);
    }
  }

  const listing = [...seen.values()];
  console.log("unique posts", listing.length);

  const posts = await mapPool(listing, CONCURRENCY, async (item, idx) => {
    console.log(`article ${idx + 1}/${listing.length} ${item.slug}`);
    let body = [];
    let excerpt = "";
    let author = item.author;
    let categories = item.categories;
    try {
      const html = await fetchText(`${BASE}/blog/${item.slug}`);
      const rich = extractRichHtml(html);
      body = htmlToBlocks(rich);
      excerpt = body.find((b) => b.type === "p")?.text?.replace(/\*\*/g, "") ?? "";
      const topAuthor = html.match(/class="article_author-name is-top"[^>]*>([^<]+)/)?.[1];
      if (topAuthor) author = decode(topAuthor.trim());
      const heroCats = [...html.matchAll(/class="article-hero_category-label"[^>]*>([^<]+)/g)].map((m) =>
        decode(m[1].trim()),
      );
      if (heroCats.length) categories = heroCats;
    } catch (err) {
      console.warn("article fail", item.slug, err.message);
    }

    const cover = await downloadCover(item.coverRemote, item.slug);
    return {
      slug: item.slug,
      title: item.title,
      author,
      date: item.date,
      categories,
      excerpt: excerpt.slice(0, 240),
      cover,
      body,
    };
  });

  posts.sort((a, b) => {
    const [ad, am, ay] = a.date.split(".").map(Number);
    const [bd, bm, by] = b.date.split(".").map(Number);
    return new Date(by, bm - 1, bd) - new Date(ay, am - 1, ad);
  });

  fs.writeFileSync(OUT_JSON, JSON.stringify(posts, null, 2));
  console.log("wrote", OUT_JSON, posts.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
