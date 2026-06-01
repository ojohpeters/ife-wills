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
import {
  ArrowRight,
  Check,
  Icon,
  Quote,
  Sprout,
} from "@/components/icons";
import { credentials, financialNote, oneOnOne } from "@/lib/content";

export const metadata: Metadata = {
  title: "One-on-One Coaching",
  description:
    "Personalized coaching for your healing journey. Work one-on-one with trauma-informed coach Ife Williams to process, rebuild, and rise with clarity and compassion.",
};

export default function OneOnOnePage() {
  const {
    hero,
    why,
    coach,
    helpsWith,
    approach,
    experience,
    packages,
    testimonials,
    faq,
    finalCta,
  } = oneOnOne;

  return (
    <>
      {/* ============ HERO ============ */}
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/book">Book a Session</Button>
          <Button href="#packages" variant="ghost" icon={false}>
            See packages
          </Button>
        </div>
      </PageHero>

      {/* ============ WHY 1:1 ============ */}
      <section className="py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-16">
          <Reveal>
            <Eyebrow>{why.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
              {why.title}
            </h2>
          </Reveal>
          <div className="space-y-5 text-base leading-relaxed text-stone">
            {why.paragraphs.map((p, i) => (
              <Reveal key={i} delay={120 + i * 60}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ MEET YOUR COACH ============ */}
      <section className="bg-cream-deep/55 py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-[2.25rem] bg-linear-to-br from-forest via-forest to-sage-deep p-9 shadow-lift">
                <div className="bg-grain absolute inset-0" aria-hidden="true" />
                <BotanicalArt className="absolute -right-8 -top-8 h-72 w-auto text-cream/10" />
                <div className="relative flex flex-col items-center text-center">
                  <span className="flex h-28 w-28 items-center justify-center rounded-full bg-cream font-display text-4xl font-medium text-forest shadow-lift">
                    IW
                  </span>
                  <p className="mt-6 font-display text-2xl font-medium text-cream">
                    Ife Williams
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Your one-on-one coach
                  </p>
                  <div className="mt-7 w-full space-y-3 border-t border-cream/15 pt-7 text-left">
                    {credentials.map((c) => (
                      <div key={c} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span className="text-sm text-cream/80">{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>{coach.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                {coach.title}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone">
              {coach.paragraphs.map((p, i) => (
                <Reveal key={i} delay={140 + i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={290}>
              <div className="mt-8">
                <Button href="/about" variant="ghost">
                  Read full bio
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ HELPS WITH ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={helpsWith.eyebrow}
            title={helpsWith.title}
          />
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {helpsWith.items.map((item, i) => (
              <Reveal key={item} delay={(i % 3) * 90}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage-soft/65 text-sage-deep">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-sm font-medium leading-snug text-forest">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mx-auto mt-12 max-w-2xl rounded-[2rem] bg-forest px-7 py-8 text-center text-cream sm:px-10">
              <Sprout className="mx-auto h-9 w-9 text-gold" />
              <p className="mt-4 font-display text-2xl font-medium italic leading-snug sm:text-3xl">
                {helpsWith.callout}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ APPROACH ============ */}
      <section className="relative overflow-hidden bg-cream-deep/55 py-24 sm:py-28">
        <BotanicalArt className="absolute -left-10 -top-12 h-80 w-auto text-sage/20" />
        <BotanicalArt className="absolute -right-12 -bottom-16 h-80 w-auto rotate-180 text-sage/20" />
        <Container className="relative">
          <SectionHeading
            eyebrow={approach.eyebrow}
            title={approach.title}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {approach.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 110}>
                <article className="flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-cream">
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

          <Reveal delay={400}>
            <figure className="mx-auto mt-12 max-w-3xl rounded-3xl border border-line bg-paper p-8 text-center sm:p-10">
              <Quote className="mx-auto h-9 w-9 text-gold-deep" />
              <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-forest sm:text-2xl">
                &ldquo;{approach.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                — {approach.quote.reference}
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={experience.eyebrow}
            title={experience.title}
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experience.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <article className="flex h-full gap-4 rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage-soft/55 text-sage-deep">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-forest">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ PACKAGES ============ */}
      <section
        id="packages"
        className="scroll-mt-32 bg-cream-deep/55 py-24 sm:py-28"
      >
        <Container>
          <SectionHeading
            eyebrow="Coaching packages"
            title="Choose the support that fits your season."
            description="Whether you need a single session for clarity or a longer journey for deeper transformation — there's a package shaped to meet you where you are."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.name} delay={i * 110}>
                <article
                  className={`relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8 ${
                    pkg.highlight
                      ? "border-forest bg-forest text-cream shadow-lift"
                      : "border-line bg-paper hover:shadow-card"
                  }`}
                >
                  {pkg.highlight && (
                    <span className="absolute -top-3 right-6 rounded-full bg-gold px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-forest-deep">
                      Most popular
                    </span>
                  )}
                  <h3
                    className={`font-display text-2xl font-medium ${
                      pkg.highlight ? "text-cream" : "text-forest"
                    }`}
                  >
                    {pkg.name}
                  </h3>
                  <p
                    className={`mt-2 text-sm ${
                      pkg.highlight ? "text-cream/70" : "text-stone"
                    }`}
                  >
                    {pkg.length}
                  </p>
                  <p
                    className={`mt-6 font-display text-4xl font-medium leading-none ${
                      pkg.highlight ? "text-gold" : "text-forest"
                    }`}
                  >
                    {pkg.fee}
                  </p>
                  {pkg.perSession && (
                    <p
                      className={`mt-1.5 text-xs font-medium ${
                        pkg.highlight ? "text-cream/65" : "text-sage-deep"
                      }`}
                    >
                      {pkg.perSession}
                    </p>
                  )}
                  <p
                    className={`mt-5 flex-1 text-sm leading-relaxed ${
                      pkg.highlight ? "text-cream/80" : "text-stone"
                    }`}
                  >
                    {pkg.description}
                  </p>
                  <Link
                    href="/book"
                    className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                      pkg.highlight
                        ? "bg-cream text-forest hover:bg-paper"
                        : "bg-forest text-cream hover:bg-forest-deep"
                    }`}
                  >
                    Choose this package
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mx-auto mt-10 flex max-w-3xl flex-col items-start gap-4 rounded-3xl border border-gold/30 bg-gold/8 px-7 py-6 sm:flex-row sm:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/25 text-gold-deep">
                <Icon name="heart" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-medium text-forest">
                  {financialNote.title}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-stone">
                  {financialNote.description}
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Client experiences"
            title="What clients say after working with Ife."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 110}>
                <figure className="flex h-full flex-col rounded-3xl border border-line bg-paper p-7">
                  <Quote className="h-8 w-8 text-gold-deep" />
                  <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-forest">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-line pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                    — {t.attribution}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-cream-deep/55 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Frequently asked"
            title="Questions clients often ask."
            description="Have something else on your mind? Reach out and we'll be glad to answer."
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
              For a full list of questions and answers, visit the{" "}
              <Link
                href="/faq"
                className="font-medium text-forest underline underline-offset-4"
              >
                FAQ page
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
        primary={{ href: "/book", label: "Book your session" }}
        secondary={{ href: "/services/group-coaching", label: "Explore group coaching" }}
      />
    </>
  );
}
