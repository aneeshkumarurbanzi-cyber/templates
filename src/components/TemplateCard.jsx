"use client";

export default function TemplateCard({ t }) {
  return (
    <div className="group">
      {/* Website preview */}
      <a
        href={t.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${t.title}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8923F]"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-stone-200 bg-white shadow-md transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl">
          {t.preview ? (
            <img
              src={t.preview}
              alt={`${t.title} preview`}
              className="h-full w-full object-cover"
            />
          ) : (
            <iframe
              src={t.url}
              title={`${t.title} live preview`}
              loading="lazy"
              tabIndex={-1}
              className="pointer-events-none absolute left-0 top-0 h-[133.33%] w-[133.33%] origin-top-left scale-[0.75] border-0"
            />
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/35">
            <span className="translate-y-3 rounded-full border border-white/70 bg-white/95 px-5 py-2 text-sm font-medium text-stone-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              View Invitation ↗
            </span>
          </div>
        </div>
      </a>

      {/* Card details */}
      <div className="pt-4">
        <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[#8A6A22]">
          {t.category}
        </p>

        <h3 className="font-display text-2xl text-[#14231E]">
          {t.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-stone-600">
          {t.description}
        </p>

        <a
          href={t.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#8A6A22] transition hover:gap-3"
        >
          Explore design <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}