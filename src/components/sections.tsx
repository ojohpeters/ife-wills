import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "@/components/icons";
import Reveal from "@/components/Reveal";

/* ---------- Container ---------- */

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Eyebrow ---------- */

export function Eyebrow({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] ${
        tone === "light" ? "text-gold" : "text-sage-deep"
      }`}
    >
      <span
        className={`h-px w-7 ${tone === "light" ? "bg-gold/60" : "bg-sage"}`}
      />
      {children}
    </span>
  );
}

/* ---------- Button ---------- */

type ButtonVariant = "primary" | "ghost" | "light" | "outline-light";

const buttonStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-cream shadow-soft hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-lift",
  ghost:
    "border border-forest/25 text-forest hover:border-forest hover:bg-forest hover:text-cream",
  light:
    "bg-cream text-forest hover:-translate-y-0.5 hover:bg-paper shadow-soft",
  "outline-light":
    "border border-cream/35 text-cream hover:bg-cream hover:text-forest",
};

export function Button({
  href,
  children,
  variant = "primary",
  icon = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300 ${buttonStyles[variant]} ${className}`}
    >
      {children}
      {icon && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

/* ---------- Section heading ---------- */

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "light";
}) {
  const centered = align === "center";
  return (
    <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow tone={tone === "light" ? "light" : "default"}>
            {eyebrow}
          </Eyebrow>
        </Reveal>
      )}
      <Reveal delay={80}>
        <h2
          className={`mt-5 font-display text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl md:text-[2.7rem] ${
            tone === "light" ? "text-cream" : "text-forest"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p
            className={`mt-5 text-base leading-relaxed sm:text-lg ${
              tone === "light" ? "text-cream/70" : "text-stone"
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------- Decorative botanical art ---------- */

export function BotanicalArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M100 320V70"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M100 250c-34 0-58-22-58-54 32 0 58 22 58 54Z" />
        <path d="M100 250c-34 0-58-22-58-54" />
        <path d="M100 196c34 0 58-22 58-54-32 0-58 22-58 54Z" />
        <path d="M100 196c34 0 58-22 58-54" />
        <path d="M100 150c-30 0-50-20-50-48 28 0 50 20 50 48Z" />
        <path d="M100 150c-30 0-50-20-50-48" />
        <path d="M100 110c26 0 44-18 44-44-24 0-44 18-44 44Z" />
        <path d="M100 110c26 0 44-18 44-44" />
      </g>
      <circle cx="100" cy="64" r="8" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

/* ---------- Closing CTA band ---------- */

export function CtaBand({
  eyebrow = "Begin Your Healing Journey",
  title = "You don't have to walk through it alone.",
  description = "Whether you're seeking support for yourself, your teen, or your family, you deserve a space where you can breathe, process, and rebuild.",
  primary = { href: "/book", label: "Book a Session" },
  secondary,
}: {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden bg-forest text-cream">
      <div className="bg-grain absolute inset-0" aria-hidden="true" />
      <BotanicalArt className="absolute -right-10 -top-16 h-[26rem] w-auto text-cream/8" />
      <BotanicalArt className="absolute -left-16 bottom-[-6rem] h-80 w-auto rotate-180 text-cream/8" />
      <Container className="relative py-24 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow tone="light">{eyebrow}</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="mt-6 font-display text-3xl font-medium leading-[1.13] tracking-tight sm:text-4xl md:text-[2.85rem]">
              {title}
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg">
              {description}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={primary.href} variant="light">
                {primary.label}
              </Button>
              {secondary && (
                <Button
                  href={secondary.href}
                  variant="outline-light"
                  icon={false}
                >
                  {secondary.label}
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ---------- Inner page hero ---------- */

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-cream-deep/55">
      <BotanicalArt className="absolute -right-8 top-[-3rem] h-[30rem] w-auto text-sage/25" />
      <div
        className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-sage-soft/40 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-24 md:py-28">
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-forest sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone">
              {description}
            </p>
          </Reveal>
          {children && (
            <Reveal delay={220}>
              <div className="mt-9">{children}</div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
