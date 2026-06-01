import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  BotanicalArt,
  Button,
  Container,
  CtaBand,
  Eyebrow,
  SectionHeading,
} from "@/components/sections";
import {
  ArrowRight,
  Check,
  Icon,
  Quote,
  Sprout,
  Star,
} from "@/components/icons";
import {
  audience,
  credentials,
  financialNote,
  homeHero,
  principles,
  scripture,
  services,
  stats,
  trustedGuide,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-32 h-[34rem] w-[34rem] rounded-full bg-sage-soft/50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-32 top-44 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
        />

        <Container className="relative grid gap-16 pb-20 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-28 lg:pt-20">
          <div>
            <Reveal>
              <Eyebrow>{homeHero.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[2.55rem] font-medium leading-[1.06] tracking-tight text-forest sm:text-5xl md:text-[3.7rem]">
                {homeHero.title}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
                {homeHero.paragraphs[0]}
              </p>
            </Reveal>
            <Reveal delay={210}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-stone">
                {homeHero.paragraphs[1]}
              </p>
            </Reveal>
            <Reveal delay={290}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/book">Book a Session</Button>
                <Button href="/services" variant="ghost" icon={false}>
                  Explore Services
                </Button>
              </div>
            </Reveal>
            <Reveal delay={360}>
              <div className="mt-11 flex flex-wrap items-center gap-x-9 gap-y-5 border-t border-line pt-7">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-[1.7rem] font-medium leading-none text-forest">
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-xs leading-snug text-stone">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Art panel */}
          <Reveal delay={220} className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-[2.25rem] bg-linear-to-br from-forest via-forest to-sage-deep p-9 shadow-lift">
                <div className="bg-grain absolute inset-0" aria-hidden="true" />
                <BotanicalArt className="absolute left-1/2 top-1/2 h-[118%] w-auto -translate-x-1/2 -translate-y-1/2 text-cream/10" />
                <div className="relative flex aspect-[4/5] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-cream/10 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cream/85">
                      Virtual · faith-rooted
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cream/10 text-cream">
                      <Sprout className="h-6 w-6" />
                    </span>
                  </div>
                  <div>
                    <Quote className="h-10 w-10 text-gold" />
                    <p className="mt-4 font-display text-[1.7rem] italic leading-snug text-cream">
                      Every person deserves a safe place to heal, grow, and
                      rediscover hope.
                    </p>
                    <p className="mt-5 text-sm font-medium tracking-wide text-cream/65">
                      — Ife Williams
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="animate-float absolute -left-4 top-14 flex items-center gap-3 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-card backdrop-blur-sm sm:-left-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-soft/60 text-sage-deep">
                  <Star className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">
                    20+ years
                  </p>
                  <p className="text-xs text-stone">walking with people</p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-card backdrop-blur-sm sm:-right-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-cream">
                  <Check className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">
                    Confidential
                  </p>
                  <p className="text-xs text-stone">virtual · anywhere</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ CREDENTIALS STRIP ============ */}
      <section className="border-y border-line bg-cream-deep/55">
        <Container className="py-7">
          <div className="grid gap-4 sm:grid-cols-3">
            {credentials.map((credential, i) => (
              <Reveal
                key={credential}
                delay={i * 90}
                className="flex items-center gap-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper text-gold-deep ring-1 ring-line">
                  <Check className="h-4.5 w-4.5" />
                </span>
                <p className="text-sm font-medium leading-snug text-forest">
                  {credential}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ TARGETED AUDIENCE — Adults 18+ ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow={audience.eyebrow}
            title={audience.title}
            description={audience.description}
          />
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {audience.groups.map((group, i) => (
              <Reveal key={group.title} delay={i * 130}>
                <article className="group flex h-full gap-5 rounded-3xl border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sage-soft/55 text-sage-deep transition-colors duration-300 group-hover:bg-forest group-hover:text-cream">
                    <Icon name={group.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-forest">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {group.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ TRUSTED GUIDE — What He Provides ============ */}
      <section className="bg-cream-deep/55 py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-line bg-linear-to-br from-sage-soft/70 via-cream-deep to-cream p-10 shadow-soft">
                <BotanicalArt className="absolute -right-6 -top-6 h-72 w-auto text-sage-deep/20" />
                <div className="relative flex flex-col items-center text-center">
                  <span className="flex h-28 w-28 items-center justify-center rounded-full bg-forest font-display text-4xl font-medium text-cream shadow-lift">
                    IW
                  </span>
                  <p className="mt-6 font-display text-2xl font-medium text-forest">
                    Ife Williams
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                    Trauma-Informed Coach &amp; Pastor
                  </p>
                  <div className="mt-7 w-full space-y-2.5 border-t border-line pt-7 text-left">
                    {credentials.map((credential) => (
                      <div
                        key={credential}
                        className="flex items-start gap-2.5"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                        <span className="text-sm text-stone">
                          {credential}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>{trustedGuide.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                {trustedGuide.title}
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-stone">
                {trustedGuide.description}
              </p>
            </Reveal>
            <Reveal delay={210}>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-sage-deep">
                He provides
              </p>
              <ul className="mt-4 space-y-3.5">
                {trustedGuide.provides.map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-sage-soft/65 text-sage-deep">
                      <Icon name={item.icon} className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={270}>
              <div className="mt-9">
                <Button href="/about" variant="ghost">
                  Read the full story
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Two paths to healing — chosen for the season you're in."
              description="Every service offers a safe, confidential, and grace-filled environment where you can heal, grow, and regain emotional stability."
            />
            <Reveal delay={160} className="shrink-0">
              <Button href="/services" variant="ghost">
                View all services
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 110}>
                <Link
                  href={service.href}
                  className="group block h-full rounded-3xl border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-cream">
                        <Icon name={service.icon} className="h-7 w-7" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-deep">
                        {service.length}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-2xl font-medium leading-snug text-forest">
                      {service.name}
                    </h3>
                    <p className="mt-2 font-display text-base italic text-sage-deep">
                      {service.tagline}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-stone">
                      {service.summary}
                    </p>
                    <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                      <span className="font-display text-lg font-medium text-forest">
                        {service.fee}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-forest transition-colors group-hover:text-gold-deep">
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Financial assistance note */}
          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-start gap-4 rounded-3xl border border-line bg-cream-deep/60 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-gold-deep">
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
              <Link
                href="/book"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-forest/25 px-5 py-2.5 text-sm font-medium text-forest transition-all duration-300 hover:border-forest hover:bg-forest hover:text-cream"
              >
                Reach out
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ============ APPROACH / SAFE SPACE ============ */}
      <section className="bg-cream-deep/55 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="A Safe Space for Real Healing"
            title="Five principles that shape every session."
            description="Ife's practice is built on commitments that foster genuine transformation — so you always know what to expect when you arrive."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, i) => (
              <Reveal key={principle.title} delay={i * 90}>
                <article className="flex h-full gap-4 rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage-soft/55 text-sage-deep">
                    <Icon name={principle.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-medium text-forest">
                      {principle.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {principle.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal delay={principles.length * 90}>
              <Link
                href="/about"
                className="group flex h-full flex-col justify-between gap-6 rounded-3xl bg-forest p-7 text-cream transition-all duration-300 hover:-translate-y-1 hover:bg-forest-deep hover:shadow-lift"
              >
                <Sprout className="h-9 w-9 text-gold" />
                <div>
                  <h3 className="font-display text-lg font-medium">
                    Discover the full approach
                  </h3>
                  <p className="mt-2 inline-flex items-center gap-2 text-sm text-cream/70">
                    More about Ife
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </p>
                </div>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ SCRIPTURE ============ */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grain absolute inset-0" aria-hidden="true" />
        <BotanicalArt className="absolute -left-12 -bottom-20 h-96 w-auto text-cream/8" />
        <Container className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <div className="flex justify-center">
                <Eyebrow tone="light">A Calling Rooted in Scripture</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 font-display text-3xl font-medium leading-[1.14] tracking-tight sm:text-4xl">
                The God who heals, restores, and renews — that is the promise
                behind every session.
              </h2>
            </Reveal>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {scripture.map((verse, i) => (
              <Reveal key={verse.reference} delay={i * 130}>
                <figure className="h-full rounded-3xl border border-cream/12 bg-cream/5 p-8">
                  <Quote className="h-9 w-9 text-gold" />
                  <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-cream">
                    &ldquo;{verse.text}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    {verse.reference}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <CtaBand
        secondary={{ href: "/services", label: "See services & fees" }}
      />
    </>
  );
}
