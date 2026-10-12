
import TemplateCard from "@/components/TemplateCard";

const templates = [
  {
    title: "Wedding Card",
    category: "wedding",
    description: "Elegant wedding invitation with all the event details.",
    url: "https://wedding-ashy-nine-32.vercel.app/",
  },
  {
    title: "Wedding Card",
    category: "wedding",
    description: "A second wedding design with a different look.",
    url: "https://weddingcard-alpha.vercel.app/",
  },
  {
    title: "Wedding Card",
    category: "wedding",
    description: "Wedding card with a fresh, modern layout.",
    url: "https://weddingcard1-psi.vercel.app/",
  },
  {
    title: "Wedding Card",
    category: "wedding",
    description: "Classic wedding invitation for a traditional celebration.",
    url: "https://weddingcard2-sepia.vercel.app/",
  },
  {
    title: "Birthday Invitation",
    category: "birthday",
    description: "A bright and playful invitation for a birthday party.",
    url: "https://bdaycard-black.vercel.app/",
  },
];

const sections = [
  {
    id: "wedding",
    title: "Wedding Invitations",
    blurb: "Explore elegant designs made for unforgettable celebrations.",
  },
  {
    id: "birthday",
    title: "Birthday Invitations",
    blurb: "Discover invitations for birthdays and special milestones.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[black] text-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pb-12 pt-16 md:pb-20 md:pt-24">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
          The Invitation Collection
        </p>

        <h1 className="max-w-4xl font-display text-5xl leading-[1.08] md:text-7xl">
          Invitations made to be opened, shared and remembered.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
          Discover beautiful digital invitations. Preview each design
          and open the complete experience before choosing your favourite.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#wedding"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm text-white transition hover:bg-stone-700"
          >
            Wedding Collection
          </a>

          <a
            href="#birthday"
            className="rounded-full border border-stone-300 px-6 py-3 text-sm transition hover:bg-white"
          >
            Birthday Collection
          </a>
        </div>
      </section>

      {/* Template collections */}
      {sections.map((section) => {
        const sectionTemplates = templates.filter(
          (template) => template.category === section.id
        );

        return (
          <section
            key={section.id}
            id={section.id}
            className="mx-auto max-w-7xl scroll-mt-8 px-6 py-12 md:py-16"
          >
            <div className="flex flex-col justify-between gap-3 border-b border-stone-200 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.25em] text-stone-500">
                  Curated designs
                </p>

                <h2 className="font-display text-3xl md:text-4xl">
                  {section.title}
                </h2>
              </div>

              <p className="text-sm text-stone-500">
                {sectionTemplates.length}{" "}
                {sectionTemplates.length === 1 ? "design" : "designs"}
              </p>
            </div>

            <p className="mt-5 text-stone-600">{section.blurb}</p>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sectionTemplates.map((template, index) => (
                <TemplateCard
                  key={template.url}
                  t={template}
                  index={index}
                />
              ))}
            </div>
          </section>
        );
      })}

      <footer className=" border-t border-stone-200 px-6 py-10 text-center text-sm text-stone-500">
        Beautiful invitations for life's most memorable moments.
      </footer>
    </main>
  );
}

