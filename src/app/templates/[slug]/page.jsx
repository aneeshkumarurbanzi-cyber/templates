import Link from "next/link";
import { notFound } from "next/navigation";
import { getTemplate, templates } from "@/lib/templates";

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export default async function TemplatePage({ params }) {
  const { slug } = await params; // works on Next.js 14 and 15
  const t = getTemplate(slug);
  if (!t) notFound();
  const { Component } = t;

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between bg-[#14231E]/95 px-4 py-3 text-sm text-white backdrop-blur">
        <Link href={`/#${t.category}`} className="underline-offset-4 hover:underline">Back to templates</Link>
        <span className="font-display text-lg">{t.title}</span>
      </div>
      <Component />
    </>
  );
}
