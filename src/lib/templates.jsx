// 1) Import YOUR existing template components here, e.g.
// import ElegantWedding from "@/templates/wedding/ElegantWedding";
// import BalloonBirthday from "@/templates/birthday/BalloonBirthday";

// Temporary stand-in so the site runs before you plug in your templates.
const Placeholder = () => (
  <div className="grid min-h-screen place-items-center bg-stone-100 p-8 text-center text-stone-600">
    Replace this with your template component in lib/templates.js
  </div>
);

// 2) Add one entry per template. category is "wedding" or "birthday".
//    preview (optional): image in /public, e.g. "/previews/elegant.jpg"
export const templates = [
  {
    slug: "elegant-wedding",
    title: "Elegant garden wedding",
    category: "wedding",
    description: "Soft florals, serif type and an RSVP section.",
    colors: ["#E9D5CF", "#8A6F5A"],
    Component: Placeholder, // -> ElegantWedding
  },
  {
    slug: "modern-wedding",
    title: "Modern minimal wedding",
    category: "wedding",
    description: "Clean layout with countdown and venue map.",
    colors: ["#D9DDD3", "#1F2F28"],
    Component: Placeholder,
  },
  {
    slug: "balloon-birthday",
    title: "Balloon party birthday",
    category: "birthday",
    description: "Bright, playful invite for kids' parties.",
    colors: ["#FFD9A8", "#E2576B"],
    Component: Placeholder, // -> BalloonBirthday
  },
  {
    slug: "gold-birthday",
    title: "Black and gold birthday",
    category: "birthday",
    description: "Dressed-up invite for milestone birthdays.",
    colors: ["#2A2420", "#B8923F"],
    Component: Placeholder,
  },
];

export const getTemplate = (slug) => templates.find((t) => t.slug === slug);
