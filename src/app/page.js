import TemplateCard from "@/components/TemplateCard";

const templates = [
  {
    title: "Wedding card",
    category: "wedding",
    description: "Elegant wedding invitation with all the event details.",
    colors: ["#E9D5CF", "#8A6F5A"],
    url: "https://wedding-ashy-nine-32.vercel.app/",
  },
  {
    title: "Wedding card ",
    category: "wedding",
    description: "A second wedding design with a different look.",
    colors: ["#D9DDD3", "#1F2F28"],
    url: "https://weddingcard-alpha.vercel.app/",
  },
  {
    title: "Wedding card ",
    category: "wedding",
    description: "Wedding card with a fresh, modern layout.",
    colors: ["#F2D7D5", "#6B3A4A"],
    url: "https://weddingcard1-psi.vercel.app/",
  },
  {
    title: "Wedding card ",
    category: "wedding",
    description: "Classic wedding invitation for a traditional celebration.",
    colors: ["#EAD9B8", "#7A5A1E"],
    url: "https://weddingcard2-sepia.vercel.app/",
  },
  {
    title: "Birthday invitation ",
    category: "birthday",
    description: "Bright, playful invitation for a birthday party.",
    colors: ["#FFD9A8", "#E2576B"],
    url: "https://bdaycard-black.vercel.app/",
  },
];

const sections = [
  { id: "wedding", title: "Wedding invitations", blurb: "Open any design to see the full invitation." },
  { id: "birthday", title: "Birthday invitations", blurb: "From kids' parties to milestone birthdays." },
];

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-10 md:pt-20">
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl">
          Invitations made to be opened, shared and remembered.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-stone-600">
          Browse the wedding and birthday templates below and open any one to see it live.
        </p>
      </section>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="mx-auto max-w-6xl scroll-mt-8 px-6 py-12">
          <h2 className="font-display text-4xl">{s.title}</h2>
          <p className="mt-2 text-stone-600">{s.blurb}</p>
          <div className="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {templates
              .filter((t) => t.category === s.id)
              .map((t) => (
                <TemplateCard key={t.url} t={t} />
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}