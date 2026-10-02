import Link from "next/link";
import type { CaseStudy } from "@/lib/data/cases";
import type { CaseBody } from "@/lib/data/case-body";

function isDesignSystemSection(title: string) {
  return /design system/i.test(title);
}

function designSystemImages(images: string[]) {
  if (images.length >= 4 && images.length % 2 === 0) {
    return images.slice(0, images.length / 2);
  }
  return images;
}

export function CaseStudyBody({ item, body }: { item: CaseStudy; body: CaseBody }) {
  const hero = body.heroImage || item.image;
  const metaItems = [
    { label: "Client", value: body.meta.client },
    { label: "Industry", value: body.meta.industry },
    { label: "Headquarter", value: body.meta.hq },
    { label: "Service", value: item.tags[0] },
  ].filter((entry) => entry.value);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0b0b0b]">
        <div className="mx-auto max-w-[1100px] px-5 pb-10 pt-10 md:px-8 md:pt-14">
          <Link href="/works" className="text-sm text-white/60 hover:text-lime">
            ← All works
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {item.tags.map((t) => (
              <span key={t} className="pill-tag">
                {t}
              </span>
            ))}
            {item.metric ? <span className="pill-tag text-lime!">{item.metric}</span> : null}
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-white md:text-6xl">
            {body.headline}
          </h1>
          {body.lead ? (
            <p className="mt-4 max-w-2xl text-lg text-white/70 md:text-2xl">
              <span className="font-serif-italic text-lime">{body.lead}</span>
            </p>
          ) : null}
        </div>
        {hero ? (
          <div className="mx-auto max-w-[1100px] px-5 pb-10 md:px-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={hero}
              alt={item.title}
              className="w-full rounded-[24px] object-cover"
            />
          </div>
        ) : null}
      </section>

      <section className="bg-white text-black">
        <div className="mx-auto max-w-[1100px] px-5 py-16 md:px-8 md:py-24">
          {metaItems.length > 0 ? (
            <dl className="grid overflow-hidden rounded-[32px] bg-[#f5f5f5] sm:grid-cols-2 lg:grid-cols-4 [&>div+div]:border-t [&>div+div]:border-black/10 sm:[&>div:nth-child(even)]:border-l lg:[&>div]:border-t-0 lg:[&>div+div]:border-l">
              {metaItems.map((entry) => (
                <div key={entry.label} className="px-6 py-7 md:px-8 md:py-9">
                  <dt className="text-[11px] uppercase tracking-[0.16em] text-black/40">
                    {entry.label}
                  </dt>
                  <dd className="mt-3 text-2xl font-medium tracking-tight md:text-[28px]">
                    {entry.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          {body.about ? (
            <div className="mt-16 grid gap-6 md:grid-cols-[180px_1fr] md:gap-16">
              <h2 className="text-[11px] uppercase tracking-[0.16em] text-black/40">
                About project
              </h2>
              <p className="font-serif text-2xl leading-snug text-black md:text-[2.35rem] md:leading-[1.25]">
                {body.about}
              </p>
            </div>
          ) : null}

          {(body.problem || body.solution) && (
            <div className="mt-16 grid gap-4 md:grid-cols-2">
              {body.problem ? (
                <div className="rounded-[24px] bg-[#f5f5f5] p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-black">Problem</h3>
                  <p className="mt-3 leading-relaxed text-black/65">{body.problem}</p>
                </div>
              ) : null}
              {body.solution ? (
                <div className="rounded-[24px] bg-[#f5f5f5] p-6 md:p-8">
                  <h3 className="text-xl font-semibold text-black">Solution</h3>
                  <p className="mt-3 leading-relaxed text-black/65">{body.solution}</p>
                </div>
              ) : null}
            </div>
          )}

          {body.process.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-3xl font-semibold text-black">Process</h2>
              {body.processIntro ? (
                <p className="mt-3 max-w-3xl leading-relaxed text-black/60">{body.processIntro}</p>
              ) : null}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {body.process.map((step, i) => (
                  <div key={step.title} className="rounded-[24px] bg-[#f5f5f5] p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lime text-sm font-semibold text-black">
                        {i + 1}
                      </span>
                      <h3 className="text-lg font-semibold text-black">{step.title}</h3>
                    </div>
                    <ul className="mt-4 space-y-1.5 text-sm text-black/60">
                      {step.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {item.quote ? (
            <blockquote className="mt-16 rounded-[28px] bg-[#f5f5f5] p-8">
              <p className="text-xl leading-relaxed text-black/85">“{item.quote}”</p>
              {item.author ? (
                <footer className="mt-6">
                  <div className="font-medium text-black">{item.author}</div>
                  <div className="text-sm text-black/45">{item.role}</div>
                </footer>
              ) : null}
            </blockquote>
          ) : null}

          <div className="mt-16 space-y-16">
            {body.sections.map((section) => {
              const mosaic = isDesignSystemSection(section.title);
              const images = mosaic ? designSystemImages(section.images) : section.images;
              const pair = mosaic ? images.slice(0, 2) : [];
              const rest = mosaic ? images.slice(2) : images;

              return (
                <article key={section.title}>
                  <h2 className="text-3xl font-semibold text-black">{section.title}</h2>
                  {section.text ? (
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-black/65">
                      {section.text}
                    </p>
                  ) : null}
                  {images.length > 0 ? (
                    mosaic ? (
                      <div className="mt-6 space-y-4">
                        {pair.length > 0 ? (
                          <div className="grid gap-4 md:grid-cols-2">
                            {pair.map((src) => (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                key={src}
                                src={src}
                                alt=""
                                className="h-auto w-full rounded-[24px]"
                              />
                            ))}
                          </div>
                        ) : null}
                        {rest.map((src) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={src}
                            src={src}
                            alt=""
                            className="h-auto w-full rounded-[24px]"
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="mt-6 grid gap-4">
                        {rest.map((src) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={src}
                            src={src}
                            alt=""
                            className="w-full rounded-[20px] object-cover"
                          />
                        ))}
                      </div>
                    )
                  ) : null}
                </article>
              );
            })}
          </div>

          {body.results.length > 0 ? (
            <div className="mt-16">
              <h2 className="text-3xl font-semibold text-black">Results</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {body.results.map((r) => (
                  <div key={r.title} className="rounded-[24px] bg-[#ffdfec] p-6 text-black">
                    <div className="text-3xl font-bold">{r.metric}</div>
                    <div className="mt-1 font-semibold">{r.title}</div>
                    <p className="mt-2 text-sm text-black/70">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
