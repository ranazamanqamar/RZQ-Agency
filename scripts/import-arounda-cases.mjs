import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";

const ROOT = process.cwd();
const OUT_JSON = join(ROOT, "src/lib/data/case-bodies.json");
const IMG_ROOT = join(ROOT, "public/works/cases");
const BASE = "https://arounda.agency/works";

const SLUGS = [
  "kinves", "tunnelo", "solnex", "knoot", "myso", "mojo-cx", "enzyme", "health-hq",
  "imed", "fundediq", "piko-health", "nextgpu", "altis", "vault", "aethel-finance",
  "nexora", "stockgate", "piifund", "healium", "mediflow", "lumera", "cognify",
  "braix", "cinex", "luma", "sellution", "moveon", "rydeon", "velox", "auralis",
  "loca-travel", "nonarcissai", "flowfunds", "reforge", "blockdb", "netget", "cray",
  "ohrbit", "senzo", "born-to-build", "hrworkcycles", "ping", "paypossible", "lyynk",
  "guestwise", "hai-cora", "kes-soft", "advisorworld", "galaxy", "altflow",
  "marketspotter", "smoothline", "evalence", "astra", "world-delete", "gt-protocol",
  "documotor", "unlockscalendar", "flair", "sinta", "mined", "xpence", "gigzi",
  "klasha", "sageexpress", "players-health", "gradwork", "metricly", "qtalent",
  "wordpress-products", "infinity", "voxe", "xblock", "minty-swap",
];

const PATHS = {
  myso: ["/case/myso"],
  "health-hq": ["/works/health"],
  altflow: ["/case/altflow"],
  marketspotter: ["/case/marketspotter"],
  smoothline: ["/case/smoothline"],
  evalence: ["/case/evalence"],
  astra: ["/case/astra"],
  "world-delete": ["/case/world-delete"],
  "gt-protocol": ["/case/gt-protocol"],
  documotor: ["/case/documotor"],
  unlockscalendar: ["/case/unlockscalendar"],
  flair: ["/case/flair-ai-powered-workflow-automation"],
  sinta: ["/case/sinta"],
  mined: ["/case/mined"],
  xpence: ["/case/xpence"],
  gigzi: ["/case/gigzi", "/works/gigzi"],
  klasha: ["/case/klasha"],
  sageexpress: ["/case/sageexpress"],
  "players-health": ["/case/players-health"],
  gradwork: ["/case/gradwork"],
  metricly: ["/case/metricly", "/works/metricly"],
  qtalent: ["/case/qtalent"],
  "wordpress-products": ["/case/wordpress"],
  infinity: ["/case/infinity"],
  voxe: ["/case/voxe"],
  xblock: ["/case/xblock"],
  "minty-swap": ["/case/mintyswap"],
};

function decode(html) {
  return html
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&#x2019;/g, "’")
    .replace(/&#8217;/g, "’")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)));
}

function strip(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<\/(p|h1|h2|h3|li|div)>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\{\/\}/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function rewrite(text) {
  return text
    .replace(/\bArounda\b/g, "RZQ")
    .replace(/\barounda\b/g, "RZQ")
    .replace(/arounda\.agency/gi, "rzq.agency")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanImg(url) {
  if (!url) return "";
  if (/-p-\d+\./.test(url)) return "";
  if (/placeholder|favicon|flag|United%20States|Flags/i.test(url)) return "";
  return url.split("?")[0];
}

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36",
      accept: "text/html,application/xhtml+xml",
    },
  });
  return { ok: res.ok, status: res.status, html: res.ok ? await res.text() : "" };
}

async function resolvePage(slug) {
  const tries = [...(PATHS[slug] ?? []), `/works/${slug}`, `/case/${slug}`];
  for (const path of tries) {
    const r = await fetchText(`https://arounda.agency${path}`);
    if (r.ok && r.html.length > 20000) return { ...r, path };
  }
  return null;
}

function match1(html, re) {
  const m = html.match(re);
  return m ? m[1] : "";
}

function parseCase(html, slug) {
  const headline = rewrite(
    strip(match1(html, /class="cs-hero-title-new_rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>/)),
  );
  const lead = rewrite(
    strip(match1(html, /class="cs-hero-sub-title_rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>/)),
  );
  const heroRemote =
    cleanImg(match1(html, /class="cs-hero-image"[^>]*src="([^"]+)"/)) ||
    cleanImg(match1(html, /src="([^"]+)"[^>]*class="cs-hero-image"/));

  const meta = { client: "", industry: "", timeframe: "", hq: "" };
  const metaRe =
    /cs_subhero-label-2[^>]*>([\s\S]*?)<\/div>[\s\S]*?cs_subhero-card-value-2[^>]*>([\s\S]*?)<\/div>/g;
  let mm;
  while ((mm = metaRe.exec(html))) {
    const k = strip(mm[1]).toLowerCase();
    const v = rewrite(strip(mm[2]));
    if (k.includes("client")) meta.client = v;
    else if (k.includes("industry")) meta.industry = v;
    else if (k.includes("time")) meta.timeframe = v;
    else if (k.includes("head")) meta.hq = v;
  }

  const about = rewrite(
    strip(match1(html, /class="cs_about-content_right-rich-text[^"]*"[^>]*>([\s\S]*?)<\/div>/)),
  );

  let problem = "";
  let solution = "";
  const chal = html.match(/class="cs-challenges-section[\s\S]*?<\/section>/);
  if (chal) {
    const items = [...chal[0].matchAll(/cs-challenges-item-title[^>]*>([\s\S]*?)<\/h3>[\s\S]*?cs-challenges-item-text[^>]*>([\s\S]*?)<\/p>/g)];
    for (const it of items) {
      const title = strip(it[1]).toLowerCase();
      const text = rewrite(strip(it[2]));
      if (title.includes("problem")) problem = text;
      if (title.includes("solution")) solution = text;
    }
  }

  const processIntro = rewrite(
    strip(match1(html, /class="cs-main-description cs-process-description"[^>]*>([\s\S]*?)<\/div>/)),
  );

  const process = [];
  const procBlock = html.match(/class="cs-process-cards-wrapper[\s\S]*?<\/section>/);
  if (procBlock) {
    const cards = procBlock[0].split('class="cs-process-card w-dyn-item').slice(1);
    for (const card of cards) {
      const title = rewrite(strip(match1(card, /cs-process-card-title[^>]*>([\s\S]*?)<\/div>/)));
      const items = [...card.matchAll(/cs-process-card-item[^>]*>([\s\S]*?)<\/div>/g)]
        .map((x) => rewrite(strip(x[1])))
        .filter((t) => t && t.length < 80);
      if (title) process.push({ title, items: [...new Set(items)] });
    }
  }

  const sectionSpecs = [
    ["cs-wireframing-section", "cs-wireframing-rich-text"],
    ["cs-moodboard-section", "cs-moodboard-description"],
    ["cs-redesign-section", "cs-redesign"],
    ["cs-empower-section", "cs-empower"],
    ["cs-web-design-section", "cs-web-design"],
    ["cs-graphic-design-section", "cs-graphic"],
    ["cs-research-section", "cs-research"],
    ["cs-flow-section", "cs-flow"],
    ["cs-design-system-section", "cs-design-system"],
  ];

  const sections = [];
  const parts = html.split(/<section[\s\S]*?class="/).slice(1);
  for (const part of parts) {
    const cls = part.slice(0, 80);
    if (cls.includes("w-condition-invisible")) continue;
    const spec = sectionSpecs.find(([name]) => cls.includes(name));
    if (!spec) continue;
    const chunk = part.slice(0, 12000);
    const title =
      rewrite(strip(match1(chunk, /<h2[^>]*>([\s\S]*?)<\/h2>/))) ||
      spec[0].replace("cs-", "").replace("-section", "").replace(/-/g, " ");
    const text =
      rewrite(strip(match1(chunk, /<p class="cs-main-description[^"]*"[^>]*>([\s\S]*?)<\/p>/))) ||
      rewrite(strip(match1(chunk, /<p>([\s\S]*?)<\/p>/)));
    const images = [...chunk.matchAll(/<img[^>]+src="(https:\/\/cdn\.prod\.website-files\.com[^"]+)"/g)]
      .map((m) => cleanImg(m[1]))
      .filter(Boolean);
    const uniq = [...new Set(images)].slice(0, 6);
    if (title && (text || uniq.length)) {
      sections.push({ title, text, images: uniq });
    }
  }

  const results = [];
  const resBlock = html.match(/class="cs-results-section[\s\S]*?<\/section>/);
  if (resBlock) {
    const cards = [
      ...resBlock[0].matchAll(
        /cs-results_card-heading[^>]*>([\s\S]*?)<\/h3>[\s\S]*?cs-results_card-subheading[^>]*>([\s\S]*?)<\/h4>[\s\S]*?cs-results_card-text[^>]*>([\s\S]*?)<\/p>/g,
      ),
    ];
    for (const c of cards) {
      results.push({
        metric: rewrite(strip(c[1])),
        title: rewrite(strip(c[2])),
        text: rewrite(strip(c[3])),
      });
    }
  }

  return {
    headline: headline || slug,
    lead,
    heroRemote,
    meta,
    about,
    problem,
    solution,
    processIntro,
    process,
    sections,
    results,
  };
}

function parseLegacy(html, slug) {
  const headline = rewrite(strip(match1(html, /<h1 class="heading-style-h1"[^>]*>([\s\S]*?)<\/h1>/)));
  const about = rewrite(strip(match1(html, /class="cs_about-details"[^>]*>([\s\S]*?)<\/p>/)));
  const heroRemote =
    cleanImg(match1(html, /class="cs_subhero-banner"[^>]*src="([^"]+)"/)) ||
    cleanImg(match1(html, /src="([^"]+)"[^>]*class="cs_subhero-banner"/));

  const meta = { client: "", industry: "", timeframe: "", hq: "" };
  const cards = html.split('class="cs_subhero-card"').slice(1);
  for (const card of cards.slice(0, 8)) {
    if (card.includes("w-condition-invisible") && card.indexOf("w-condition-invisible") < 80) continue;
    const label = strip(match1(card, /cs_subhero-label[^>]*>([\s\S]*?)<\/div>/)).toLowerCase();
    const values = [...card.matchAll(/cs_subhero-card-value[^>]*>([\s\S]*?)<\//g)]
      .map((m) => rewrite(strip(m[1])))
      .filter((v) => v && v !== ",");
    const value = values.join(", ");
    if (label.includes("client")) meta.client = value || meta.client;
    if (label.includes("industry")) meta.industry = value;
    if (label.includes("time")) meta.timeframe = value;
    if (label.includes("head")) meta.hq = value;
  }

  let problem = "";
  let solution = "";
  const paras = [...html.matchAll(/<p class="cs_about-details"[^>]*>([\s\S]*?)<\/p>/g)].map((m) =>
    rewrite(strip(m[1])),
  );
  if (paras[1]) problem = paras[1];
  if (paras[2]) solution = paras[2];

  const skip = /see more|free trial|need more time|let.s work/i;
  const sections = [];
  const hunks = html.split(/<h2[^>]*>/);
  for (const hunk of hunks.slice(1)) {
    const title = rewrite(strip(hunk.slice(0, hunk.indexOf("</h2>"))));
    if (!title || skip.test(title) || title === "About project" || title === "Process") continue;
    const chunk = hunk.slice(0, 14000);
    const text = rewrite(strip(match1(chunk, /<p[^>]*>([\s\S]*?)<\/p>/)));
    const images = [...chunk.matchAll(/<img[^>]+src="(https:\/\/cdn\.prod\.website-files\.com\/658162[^"]+)"/g)]
      .map((m) => cleanImg(m[1]))
      .filter(Boolean);
    const uniq = [...new Set(images)].slice(0, 6);
    if (title === "Results") continue;
    if (text || uniq.length) sections.push({ title, text, images: uniq });
  }

  const results = [];
  const resCards = [
    ...html.matchAll(
      /cs_fs-results-richtext[^"]*"[^>]*>\s*<h3>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>\s*<p>([\s\S]*?)<\/p>/g,
    ),
  ];
  for (const c of resCards) {
    results.push({
      metric: rewrite(strip(c[1])),
      title: rewrite(strip(c[2])),
      text: rewrite(strip(c[3])),
    });
  }

  return {
    headline: headline || slug,
    lead: "",
    heroRemote,
    meta,
    about,
    problem,
    solution,
    processIntro: "",
    process: [],
    sections,
    results,
  };
}

function extFromUrl(url) {
  const ext = url.split("?")[0].split(".").pop()?.toLowerCase() ?? "jpg";
  if (["png", "jpg", "jpeg", "avif", "webp"].includes(ext)) return ext === "jpeg" ? "jpg" : ext;
  return "jpg";
}

async function download(url, dest) {
  if (existsSync(dest)) return true;
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0", accept: "image/avif,image/webp,image/*,*/*" },
  });
  if (!res.ok) return false;
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 800) return false;
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, buf);
  return true;
}

async function localizeImages(slug, parsed) {
  const dir = join(IMG_ROOT, slug);
  mkdirSync(dir, { recursive: true });
  let n = 0;
  async function one(url, name) {
    const ext = extFromUrl(url);
    const dest = join(dir, `${name}.${ext}`);
    const ok = await download(url, dest);
    return ok ? `/works/cases/${slug}/${name}.${ext}` : "";
  }
  const heroImage = parsed.heroRemote ? await one(parsed.heroRemote, "hero") : "";
  const sections = [];
  for (const sec of parsed.sections) {
    const images = [];
    for (const url of sec.images) {
      n += 1;
      const local = await one(url, `s${n}`);
      if (local) images.push(local);
    }
    sections.push({ title: sec.title, text: sec.text, images });
  }
  return { heroImage, sections };
}

const existing = existsSync(OUT_JSON) ? JSON.parse(readFileSync(OUT_JSON, "utf8")) : {};
const out = { ...existing };

let i = 0;
async function worker() {
  while (i < SLUGS.length) {
    const slug = SLUGS[i++];
    if (out[slug]?.about && out[slug]?.headline) {
      console.log("skip", slug);
      continue;
    }
    try {
      const page = await resolvePage(slug);
      if (!page) {
        console.log("MISS", slug);
        continue;
      }
      const parsed = page.html.includes("cs-about-section")
        ? parseCase(page.html, slug)
        : parseLegacy(page.html, slug);
      const imgs = await localizeImages(slug, parsed);
      out[slug] = {
        headline: parsed.headline,
        lead: parsed.lead,
        heroImage: imgs.heroImage,
        meta: parsed.meta,
        about: parsed.about,
        problem: parsed.problem,
        solution: parsed.solution,
        processIntro: parsed.processIntro,
        process: parsed.process,
        sections: imgs.sections,
        results: parsed.results,
      };
      writeFileSync(OUT_JSON, JSON.stringify(out, null, 2));
      console.log("ok", slug, parsed.sections.length, "sections", parsed.results.length, "results");
    } catch (e) {
      console.log("ERR", slug, e.message);
    }
  }
}

await Promise.all(Array.from({ length: 4 }, () => worker()));
writeFileSync(OUT_JSON, JSON.stringify(out, null, 2));
const have = Object.keys(out).length;
console.log("done", have, "/", SLUGS.length);
const missing = SLUGS.filter((s) => !out[s]);
if (missing.length) console.log("missing", missing.join(", "));
