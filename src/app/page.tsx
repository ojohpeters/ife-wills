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
import { ArrowRight, Check, Icon, Quote, Sprout, Star } from "@/components/icons";
import {
  clientValues,
  credentials,
  pastoralSupportPreview,
  principles,
  scripture,
  services,
  stats,
  struggles,
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
              <Eyebrow>Compassionate · Trauma-Informed Coaching</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-6 font-display text-[2.7rem] font-medium leading-[1.04] tracking-tight text-forest sm:text-6xl md:text-[4.1rem]">
                Healing is possible — and you don&apos;t have to walk through
                it alone.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone">
                For more than two decades, Ife Williams has guided individuals,
                youth, and families through trauma, emotional overwhelm, and
                life&apos;s hardest seasons — with a calm, grounded, and deeply
                respectful approach.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/book">Book a Session</Button>
                <Button href="/services" variant="ghost" icon={false}>
                  Explore Services
                </Button>
              </div>
            </Reveal>
            <Reveal delay={300}>
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
                      Faith-rooted care
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
                  <p className="text-xs text-stone">of trusted care</p>
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
                  <p className="text-xs text-stone">judgment-free space</p>
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

      {/* ============ WELCOME ============ */}
      <section className="relative overflow-hidden py-24 sm:py-28">
        <BotanicalArt className="absolute -left-10 top-10 h-80 w-auto text-sage/15" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex justify-center">
                <Eyebrow>Welcome</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl md:text-[2.85rem]">
                A safe space, a skilled guide, and a compassionate approach
                that honors the whole person.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-stone">
                Life&apos;s challenges can leave deep emotional and spiritual
                wounds. Healing takes more than time — it takes the right
                support. As a Certified Christian Trauma Care Provider,
                Board-Certified Youth Mental Health Coach, and Master
                Trauma-Informed Care Coach, Ife brings a rare blend of
                non-clinical insight, faith-based understanding, and practical
                strategy to every client he serves.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <p className="mt-5 font-display text-xl italic leading-relaxed text-sage-deep">
                His coaching is built on one core belief: healing is possible,
                and you don&apos;t have to walk through it alone.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ WHO IT'S FOR ============ */}
      <section className="bg-cream-deep/50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Are You Carrying Something Heavy?"
            title="You don't have to keep holding it on your own."
            description="Many of the people Ife works with arrive tired, overwhelmed, or unsure where to begin. Wherever you are, there is a path forward — and a steady guide for the walk."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {struggles.map((item, i) => (
              <Reveal key={item.title} delay={i * 110}>
                <article className="group h-full rounded-3xl border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-soft/55 text-sage-deep transition-colors duration-300 group-hover:bg-forest group-hover:text-cream">
                    <Icon name={item.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-medium text-forest">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ MEET IFE ============ */}
      <section className="py-24 sm:py-28">
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
              <Eyebrow>Meet Ife Williams</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                A trusted guide for healing, restoration, and emotional
                resilience.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-stone">
                With more than twenty years of experience, Ife has become a
                trusted coach for those navigating trauma, emotional overwhelm,
                spiritual distress, and life transitions. His approach is warm,
                grounded, and deeply respectful of each person&apos;s story.
                Though he is also a pastor, his coaching is a professional,
                structured, and confidential service — never a ministry.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <ul className="mt-7 space-y-3">
                {clientValues.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-soft/70 text-sage-deep">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink">
                      {value}
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
      <section className="bg-cream-deep/50 py-24 sm:py-28">
        <Container>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Coaching tailored to where you are."
              description="Every service offers a safe, confidential, and supportive environment where clients can heal, grow, and regain emotional stability."
            />
            <Reveal delay={160} className="shrink-0">
              <Button href="/services" variant="ghost">
                View all services
              </Button>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 100}>
                <article className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-cream">
                    <Icon name={service.icon} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-medium leading-snug text-forest">
                    {service.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                    {service.summary}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                    <div className="text-sm">
                      <span className="font-display text-lg font-medium text-forest">
                        {service.fee}
                      </span>
                      <span className="text-stone"> · {service.length}</span>
                    </div>
                    <Link
                      href="/services"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-deep text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-cream"
                      aria-label={`Learn more about ${service.name}`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}

            {/* Pastoral Support — listed as the 4th service on the PDF Welcome */}
            <Reveal delay={services.length * 100}>
              <article className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sage-soft/60 text-sage-deep">
                    <Icon name={pastoralSupportPreview.icon} className="h-7 w-7" />
                  </span>
                  <span className="rounded-full bg-gold/15 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                    {pastoralSupportPreview.badge}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-xl font-medium leading-snug text-forest">
                  {pastoralSupportPreview.name}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                  {pastoralSupportPreview.summary}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
                  <div className="text-sm">
                    <span className="font-display text-lg font-medium text-forest">
                      {pastoralSupportPreview.fee}
                    </span>
                    <span className="text-stone">
                      {" "}· {pastoralSupportPreview.length}
                    </span>
                  </div>
                  <Link
                    href="/services"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-deep text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-cream"
                    aria-label="Learn more about Pastoral Support"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ APPROACH / SAFE SPACE ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="A Safe Space for Real Healing"
            title="Five principles that shape every session."
            description="Ife's practice is built on commitments that foster genuine transformation — so you always know what to expect when you walk through the door."
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
                Walking with people through their pain — and helping them
                rebuild with strength and dignity.
              </h2>
            </Reveal>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
            {scripture.map((verse, i) => (
              <Reveal key={verse.reference} delay={i * 130}>
                <figure className="h-full rounded-3xl border border-cream/12 bg-cream/5 p-8">
                  <Quote className="h-9 w-9 text-gold" />
                  <blockquote className="mt-4 font-display text-xl italic leading-relaxed text-cream">
                    {verse.text}
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
