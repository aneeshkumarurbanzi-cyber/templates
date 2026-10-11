import Link from "next/link";

export default function TemplateCard({ t }) {
  return (
    <Link
      href={t.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8923F] focus-visible:ring-offset-4"
    >
      <div
        className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-md transition group-hover:-translate-y-1 group-hover:shadow-xl"
        style={{ background: `linear-gradient(160deg, ${t.colors[0]}, ${t.colors[1]})` }}
      >
        {t.preview && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.preview} alt={`${t.title} preview`} className="h-full w-full object-cover" />
        )}
      </div>
      <h3 className="mt-4 font-display text-2xl text-[#14231E]">{t.title}</h3>
      <p className="mt-1 text-sm text-stone-600">{t.description}</p>
      <span className="mt-2 inline-block text-sm font-medium text-[#8A6A22] underline-offset-4 group-hover:underline">
        View invitation
      </span>
    </Link>
  );
}
