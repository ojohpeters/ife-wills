import Link from "next/link";
import { navLinks, site } from "@/lib/content";
import { ArrowRight, Mail, Phone, Sprout } from "@/components/icons";

const legal = [
  { href: "/policies", label: "Policies" },
  { href: "/policies", label: "Confidentiality" },
  { href: "/services", label: "Session Fees" },
  { href: "/book", label: "Book a Session" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep text-cream/80">
      <div className="bg-grain absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        {/* CTA strip */}
        <div className="grid gap-6 border-b border-cream/12 py-14 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <p className="font-display text-2xl leading-snug text-cream sm:text-3xl">
              You deserve healing. You deserve hope.
              <br className="hidden sm:block" /> You deserve a future that feels
              whole again.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              href="/book"
              className="group inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-medium text-forest transition-all duration-300 hover:-translate-y-0.5 hover:bg-paper"
            >
              Begin your journey
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream">
                <Sprout className="h-6 w-6" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-medium text-cream">
                  Ife Williams
                </span>
                <span className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                  Coaching
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream/65">
              Compassionate, trauma-informed coaching for individuals, youth,
              and families — rooted in wisdom, experience, and faith. Healing is
              possible, and you don&apos;t have to walk through it alone.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/45">
              Explore
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-cream/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/45">
              Connect
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-start gap-3 text-cream/70 transition-colors hover:text-gold"
                >
                  <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
                  className="flex items-start gap-3 text-cream/70 transition-colors hover:text-gold"
                >
                  <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold" />
                  {site.phone}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs leading-relaxed text-cream/45">
              {site.location}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-cream/12 py-8 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.practice}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((item, i) => (
              <Link
                key={`${item.label}-${i}`}
                href={item.href}
                className="transition-colors hover:text-gold"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
