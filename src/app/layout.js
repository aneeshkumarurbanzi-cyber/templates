import Link from "next/link";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
 
const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
 
export const metadata = {
  title: { default: "Invitation templates", template: "%s | Invitations" },
  description: "Wedding and birthday invitation designs. Open any one to see it live.",
  openGraph: {
    title: "Invitation templates",
    description: "Wedding and birthday invitation designs. Open any one to see it live.",
    type: "website",
  },
};
 
export const viewport = { themeColor: "#FBF9F7" };
 
// TODO: put your real details here
const CONTACT = {
  name: "Your name",
  whatsapp: "https://wa.me/910000000000?text=Hi%2C%20I%20like%20your%20invitation%20designs",
  email: "mailto:you@example.com",
};
 
const focus =
  "rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8923F] focus-visible:ring-offset-2";
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body className="min-h-screen bg-[#FBF9F7] font-sans text-[#14231E] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-[#14231E] focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
 
        <header className="sticky top-0 z-40 px-4 pt-4">
          <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 rounded-full border border-stone-200/80 bg-gray py-2 pl-6 pr-2 shadow-lg shadow-stone-900/5 backdrop-blur-md">
            <Link href="/" className={`font-display text-2xl italic ${focus}`}>
              Invitations
            </Link>
            <nav aria-label="Main" className="flex items-center gap-4 text-sm sm:gap-8">
              <Link href="/#wedding" className={`underline-offset-4 hover:underline ${focus}`}>
                Wedding
              </Link>
              <Link href="/#birthday" className={`underline-offset-4 hover:underline ${focus}`}>
                Birthday
              </Link>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-full bg-[#eef4f4] px-5 py-2.5 text-black transition hover:bg-[#eaf4f0] ${focus}`}
              >
                Order yours
              </a>
            </nav>
          </div>
        </header>
 
        <div id="main">{children}</div>
 
        <footer className="mt-24 border-t border-stone-200 bg-[#F3EFEA]">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 sm:grid-cols-3">
            <div>
              <p className="font-display text-2xl italic">Invitations</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-600">
                Digital wedding and birthday invitations you can share with a single link.
              </p>
            </div>
            <div>
              <p className="font-medium">Browse</p>
              <ul className="mt-3 space-y-2 text-sm text-stone-600">
                <li><Link href="/#wedding" className="hover:underline">Wedding invitations</Link></li>
                <li><Link href="/#birthday" className="hover:underline">Birthday invitations</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Get in touch</p>
              <ul className="mt-3 space-y-2 text-sm text-stone-600">
                <li><a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:underline">Message on WhatsApp</a></li>
                <li><a href={CONTACT.email} className="hover:underline">Send an email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-200 px-6 py-5 text-center text-xs text-stone-500">
            © {new Date().getFullYear()} {CONTACT.name}. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}