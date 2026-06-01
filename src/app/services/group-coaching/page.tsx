import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  BotanicalArt,
  Button,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  SectionHeading,
} from "@/components/sections";
import { ArrowRight, Check, Icon, Sprout } from "@/components/icons";
import { financialNote, groupCoaching } from "@/lib/content";

export const metadata: Metadata = {
  title: "Group Coaching · Grave Mind to Grace Mind",
  description:
    "A transformational group coaching experience designed to shift you from fear, stagnation, and overwhelm into clarity, compassion, and aligned living.",
};

export default function GroupCoachingPage() {
  const {
    hero,
    what,
    whoFor,
    framework,
    included,
    outcomes,
    pricing,
    faq,
    finalCta,
  } = groupCoaching;

  return (
    <>
      {/* ============ HERO ============ */}
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#enroll">Join the next cohort</Button>
          <Button href="#framework" variant="ghost" icon={false}>
            See the framework
          </Button>
        </div>
      </PageHero>

      {/* ============ WHAT IT IS ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
            <Reveal>
              <Eyebrow>{what.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                {what.title}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base leading-relaxed text-stone">
                {what.description}
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {what.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 110}>
                <article className="flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-soft/55 text-sage-deep">
                    <Icon name={pillar.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-medium text-forest">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {pillar.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ WHO IT'S FOR ============ */}
      <section className="bg-cream-deep/55 py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal>
            <Eyebrow>{whoFor.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
              {whoFor.title}
            </h2>
          </Reveal>
          <div>
            <ul className="space-y-3.5">
              {whoFor.items.map((item, i) => (
                <Reveal key={item} delay={140 + i * 70}>
                  <li className="flex items-start gap-3 rounded-2xl border border-line bg-paper px-5 py-4">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-soft/70 text-sage-deep">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink">
                      {item}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={500}>
              <div className="mt-7 flex items-start gap-4 rounded-3xl border border-gold/30 bg-gold/8 px-6 py-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/25 text-gold-deep">
                  <Icon name="heart" className="h-5 w-5" />
                </span>
                <p className="text-sm leading-relaxed text-forest">
                  {whoFor.callout}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ FRAMEWORK ============ */}
      <section id="framework" className="scroll-mt-32 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={framework.eyebrow}
            title={framework.title}
            description="Six modules of guided transformation — each building on the last, delivered as weekly live sessions inside an intimate cohort."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {framework.modules.map((module, i) => (
              <Reveal key={module.n} delay={(i % 3) * 100}>
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-medium text-gold-deep">
                      {module.n}
                    </span>
                    <Sprout className="h-6 w-6 text-sage-deep" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-forest">
                    {module.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {module.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grain absolute inset-0" aria-hidden="true" />
        <BotanicalArt className="absolute -right-12 -top-16 h-96 w-auto text-cream/8" />
        <BotanicalArt className="absolute -left-12 -bottom-20 h-80 w-auto rotate-180 text-cream/8" />
        <Container className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex justify-center">
                <Eyebrow tone="light">{included.eyebrow}</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 font-display text-3xl font-medium leading-[1.14] tracking-tight sm:text-4xl">
                {included.title}
              </h2>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {included.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 100}>
                <article className="flex h-full flex-col rounded-3xl border border-cream/12 bg-cream/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cream/25">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream/10 text-gold">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-medium text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ OUTCOMES ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={outcomes.eyebrow}
            title={outcomes.title}
            description={outcomes.description}
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-3 sm:grid-cols-2">
            {outcomes.items.map((item, i) => (
              <Reveal key={item} delay={(i % 2) * 100}>
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-paper px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage-soft/55 text-sage-deep">
                    <Check className="h-5 w-5" />
                  </span>
                  <p className="font-medium text-forest">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ PRICING / ENROLL ============ */}
      <section
        id="enroll"
        className="scroll-mt-32 bg-cream-deep/55 py-24 sm:py-28"
      >
        <Container>
          <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <Reveal>
              <Eyebrow>{pricing.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                {pricing.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone">
                {pricing.description}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button href="/book">Reserve your spot</Button>
                <Button href="/book" variant="ghost" icon={false}>
                  Book a discovery call
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-[2rem] border border-line bg-paper p-8 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                  Cohort enrollment
                </p>
                <p className="mt-3 font-display text-3xl font-medium text-forest">
                  Pricing on request
                </p>
                <p className="mt-2 text-sm text-stone">
                  Payment plans available for every cohort.
                </p>
                <ul className="mt-7 space-y-3 border-t border-line pt-6 text-sm leading-relaxed text-stone">
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                    6 modules · weekly live sessions
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                    Max 20 participants per cohort
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                    Worksheets, mindset tools &amp; bonus resources
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                    Optional accountability partners
                  </li>
                </ul>
                <div className="mt-7 flex items-start gap-4 rounded-2xl bg-gold/12 px-5 py-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/25 text-gold-deep">
                    <Icon name="heart" className="h-5 w-5" />
                  </span>
                  <p className="text-sm leading-relaxed text-forest">
                    {pricing.note}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Common questions"
            title="What cohort members often ask."
          />
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-line overflow-hidden rounded-[2rem] border border-line bg-paper">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group px-7 py-5 open:bg-cream-deep/40 sm:px-8"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                  <p className="font-display text-lg font-medium text-forest">
                    {item.q}
                  </p>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-forest transition-transform duration-300 group-open:rotate-45 group-open:border-forest">
                    <span className="text-xl leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
          <Reveal delay={300}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-stone">
              See more on the{" "}
              <Link
                href="/faq"
                className="font-medium text-forest underline underline-offset-4"
              >
                full FAQ page
              </Link>
              .
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ============ FINAL CTA ============ */}
      <CtaBand
        eyebrow={finalCta.eyebrow}
        title={finalCta.title}
        description={finalCta.description}
        primary={{ href: "/book", label: "Enroll now" }}
        secondary={{ href: "/services/one-on-one", label: "Prefer one-on-one?" }}
      />
    </>
  );
}
