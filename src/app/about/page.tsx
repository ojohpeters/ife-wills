import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import {
  BotanicalArt,
  Button,
  Container,
  CtaBand,
  Eyebrow,
} from "@/components/sections";
import { Check, Icon, Quote, Sprout } from "@/components/icons";
import { aboutContent, credentials } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Ife Williams",
  description:
    "A trusted guide for biblical healing, restoration, and emotional resilience — drawing on two decades of service across ministry, banking, healthcare, logistics, aviation, and the United States Air Force National Guard.",
};

function ScriptureBlock({
  reference,
  text,
  tone = "light",
}: {
  reference: string;
  text: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";
  return (
    <Reveal delay={140}>
      <figure
        className={`mt-8 rounded-3xl border p-7 sm:p-8 ${
          isDark
            ? "border-cream/12 bg-cream/5 text-cream"
            : "border-line bg-paper"
        }`}
      >
        <Quote className={`h-8 w-8 ${isDark ? "text-gold" : "text-gold-deep"}`} />
        <blockquote
          className={`mt-3 font-display text-lg italic leading-relaxed sm:text-xl ${
            isDark ? "text-cream" : "text-forest"
          }`}
        >
          &ldquo;{text}&rdquo;
        </blockquote>
        <figcaption
          className={`mt-5 text-xs font-semibold uppercase tracking-[0.2em] ${
            isDark ? "text-gold" : "text-sage-deep"
          }`}
        >
          {reference}
        </figcaption>
      </figure>
    </Reveal>
  );
}

export default function AboutPage() {
  const { hero, journey, foundation, approach, service, why } = aboutContent;

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-sage-soft/45 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-32 top-44 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />
        <Container className="relative grid gap-14 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-24">
          <div>
            <Reveal>
              <Eyebrow>{hero.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[2.55rem] font-medium leading-[1.06] tracking-tight text-forest sm:text-5xl md:text-[3.7rem]">
                {hero.title}
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-7 space-y-2.5 font-display text-lg italic leading-relaxed text-sage-deep sm:text-xl">
                {hero.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={230}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone">
                {hero.closing}
              </p>
            </Reveal>
            <Reveal delay={290}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button href="/book">Book a Session</Button>
                <Button href="/services" variant="ghost" icon={false}>
                  Explore Services
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Portrait card */}
          <Reveal delay={200} className="relative">
            <div className="relative mx-auto w-full max-w-md">
              {/* Photograph */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.25rem] shadow-lift">
                <Image
                  src="/ife-williams.jpg"
                  alt="Ife Williams — trauma-informed coach and pastor"
                  fill
                  sizes="(max-width: 1024px) 90vw, 36rem"
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/90 via-forest/25 to-transparent" />
                <BotanicalArt className="absolute -right-6 -bottom-4 h-44 w-auto text-cream/20" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-cream sm:p-8">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-gold">
                    Pastor · Coach · Speaker
                  </p>
                  <p className="mt-3 font-display text-[2rem] font-medium leading-[1.05]">
                    Ife Williams
                  </p>
                  <p className="mt-1 font-display text-base italic text-cream/75">
                    Trauma-Informed Care · Faith-Rooted
                  </p>
                </div>
              </div>

              {/* Credentials card — sits cleanly below the photo */}
              <div className="mt-5 rounded-[1.75rem] border border-line bg-paper px-6 py-5 shadow-card">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-sage-deep">
                    Certifications
                  </p>
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                    20+ years
                  </span>
                </div>
                <ul className="mt-3 space-y-2.5">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                      <span className="text-sm leading-snug text-forest">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ JOURNEY ============ */}
      <section className="border-t border-line bg-cream-deep/45 py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal>
            <Eyebrow>{journey.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
              From real-world moments — not textbooks.
            </h2>
          </Reveal>
          <div className="space-y-5 text-base leading-relaxed text-stone">
            {journey.paragraphs.map((p, i) => (
              <Reveal key={i} delay={120 + i * 60}>
                <p>{p}</p>
              </Reveal>
            ))}
            <ScriptureBlock
              reference={journey.scripture.reference}
              text={journey.scripture.text}
            />
            <Reveal delay={290}>
              <p className="mt-6 font-display text-lg italic text-forest">
                {journey.closing}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ FOUNDATION ============ */}
      <section className="py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal>
            <Eyebrow>{foundation.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
              {foundation.title}
            </h2>
          </Reveal>
          <div className="space-y-5 text-base leading-relaxed text-stone">
            {foundation.paragraphs.map((p, i) => (
              <Reveal key={i} delay={120 + i * 60}>
                <p>{p}</p>
              </Reveal>
            ))}
            <ScriptureBlock
              reference={foundation.scripture.reference}
              text={foundation.scripture.text}
            />
          </div>
        </Container>
      </section>

      {/* ============ GENTLE APPROACH ============ */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grain absolute inset-0" aria-hidden="true" />
        <BotanicalArt className="absolute -right-12 -top-16 h-96 w-auto text-cream/8" />
        <BotanicalArt className="absolute -left-12 -bottom-20 h-80 w-auto rotate-180 text-cream/8" />
        <Container className="relative py-24 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            <Reveal>
              <Eyebrow tone="light">{approach.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight sm:text-4xl">
                {approach.title}
              </h2>
            </Reveal>
            <div className="space-y-6 text-base leading-relaxed text-cream/80">
              {approach.paragraphs.map((p, i) => (
                <Reveal key={i} delay={120 + i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
              <Reveal delay={220}>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                  Whether someone is
                </p>
                <ul className="mt-3 space-y-2.5">
                  {approach.whether.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base text-cream"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={290}>
                <p className="font-display text-lg italic text-cream/85">
                  {approach.closing}
                </p>
              </Reveal>
              <ScriptureBlock
                reference={approach.scripture.reference}
                text={approach.scripture.text}
                tone="dark"
              />
              <Reveal delay={400}>
                <p className="text-base leading-relaxed text-cream/80">
                  {approach.afterScripture}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ============ LIFE OF SERVICE ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex justify-center">
                <Eyebrow>{service.eyebrow}</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                {service.title}
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 text-base leading-relaxed text-stone">
                {service.intro}
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.industries.map((industry, i) => (
              <Reveal key={industry.label} delay={i * 90}>
                <article className="flex h-full flex-col items-center gap-3 rounded-3xl border border-line bg-paper p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-soft/55 text-sage-deep">
                    <Icon name={industry.icon} className="h-6 w-6" />
                  </span>
                  <p className="font-medium text-forest">{industry.label}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center">
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-stone">
                {service.body}
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="rounded-[2rem] border border-line bg-cream-deep/55 px-7 py-8">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                  U.S. Air Force National Guard
                </span>
                <p className="mt-3 text-base leading-relaxed text-forest">
                  {service.military}
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <figure className="mt-6 rounded-3xl border border-line bg-paper p-7 text-left sm:p-8">
                <Quote className="h-8 w-8 text-gold-deep" />
                <blockquote className="mt-3 font-display text-lg italic leading-relaxed text-forest sm:text-xl">
                  &ldquo;{service.scripture.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                  {service.scripture.reference}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ WHY HE DOES THIS ============ */}
      <section className="bg-cream-deep/55 py-24 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex justify-center">
                <Eyebrow>{why.eyebrow}</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                {why.title}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone">
              {why.paragraphs.map((p, i) => (
                <Reveal key={i} delay={140 + i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <div className="mt-10 space-y-3.5 text-left">
              {why.invitations.map((inv, i) => (
                <Reveal key={inv} delay={220 + i * 80}>
                  <p className="flex items-start gap-4 rounded-2xl border border-line bg-paper px-6 py-4 font-display text-base italic leading-relaxed text-forest sm:text-lg">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
                    {inv}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={500}>
              <p className="mx-auto mt-10 max-w-2xl font-display text-xl italic leading-relaxed text-sage-deep">
                {why.closing}
              </p>
            </Reveal>
            <Reveal delay={580}>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/book">Begin your healing journey</Button>
                <Button href="/podcast" variant="ghost" icon={false}>
                  Listen to the podcast
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
