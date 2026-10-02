import type { BlogBlock } from "@/lib/data/blog";

function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const href = link[2];
      const external = href.startsWith("http");
      return (
        <a
          key={i}
          href={href}
          className="text-lime underline-offset-2 hover:underline"
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {link[1]}
        </a>
      );
    }
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold) return <strong key={i}>{bold[1]}</strong>;
    return <span key={i}>{part}</span>;
  });
}

export function BlogBody({ blocks }: { blocks: BlogBlock[] }) {
  if (!blocks.length) return null;

  return (
    <div className="mt-10 space-y-5 text-[1.05rem] leading-relaxed text-white/72">
      {blocks.map((block, i) => {
        if (block.type === "p") return <p key={i}>{renderInline(block.text)}</p>;
        if (block.type === "h") {
          const Tag = block.level >= 3 ? "h3" : "h2";
          return (
            <Tag
              key={i}
              className={
                block.level >= 3
                  ? "pt-4 text-xl font-semibold text-white"
                  : "pt-6 text-2xl font-semibold text-white md:text-3xl"
              }
            >
              {block.text}
            </Tag>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={i} className="list-decimal space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>{renderInline(item)}</li>
              ))}
            </ol>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={i}
              className="border-l-2 border-lime pl-5 text-white/80 italic"
            >
              {renderInline(block.text)}
            </blockquote>
          );
        }
        return (
          <figure key={i} className="overflow-hidden rounded-[20px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={block.src} alt={block.alt} className="w-full object-cover" />
            {block.caption ? (
              <figcaption className="mt-2 text-center text-sm text-white/45">
                {block.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
