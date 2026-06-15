import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  BotanicalArt,
  Button,
  Container,
  Eyebrow,
  PageHero,
} from "@/components/sections";
import { ArrowRight, Check, Icon } from "@/components/icons";
import {
  feeSchedule,
  financialNote,
  services,
  servicesIntro,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Services & Fees",
  description:
    "One-on-One Coaching and Group Coaching — compassionate, Scripture-guided, trauma-informed support with clear, transparent fees.",
};

const paymentNotes = [
  "Payment is due at the time of service",
  "Credit/debit cards and digital payments accepted",
  "Sliding-scale options available upon request",
  "No insurance billing at this time",
  "All sessions are virtual — accessible from anywhere",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={servicesIntro.eyebrow}
        title={servicesIntro.title}
        description={servicesIntro.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/book">Book a Session</Button>
          <Button href="/faq" variant="ghost" icon={false}>
            Read the FAQ
          </Button>
        </div>
      </PageHero>

      {/* SERVICE DETAIL BLOCKS */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="space-y-8">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 80}>
                <article className="grid gap-8 rounded-[2rem] border border-line bg-paper p-8 transition-shadow duration-300 hover:shadow-card sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
                  {/* Meta */}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-4">
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-forest text-cream">
                        <Icon name={service.icon} className="h-8 w-8" />
                      </span>
                      <span className="font-display text-5xl font-medium text-cream-deep">
                        0{i + 1}
                      </span>
                    </div>
                    <h2 className="mt-6 font-display text-2xl font-medium leading-snug text-forest sm:text-[1.7rem]">
                      {service.name}
                    </h2>
                    <p className="mt-3 font-display text-base italic text-sage-deep">
                      {service.tagline}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-cream-deep/70 px-4 py-2 text-sm font-medium text-forest">
                        <Icon name="clock" className="h-4 w-4 text-sage-deep" />
                        {service.length}
                      </span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-forest px-4 py-2 text-sm font-medium text-cream">
                        {service.fee}
                      </span>
                    </div>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                      <Link
                        href={service.href}
                        className="group inline-flex items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-lift"
                      >
                        Learn more
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href="/book"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-forest"
                      >
                        Book this service
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:border-l lg:border-line lg:pl-12">
                    <p className="text-base leading-relaxed text-stone">
                      {service.summary}
                    </p>
                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                      Ideal for
                    </p>
                    <ul className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {service.idealFor.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-soft/70 text-sage-deep">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-sm text-ink">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SUPPORT IMAGE BAND (replaces the removed Intake section per the brief) */}
      <section className="bg-cream-deep/55 py-24 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2rem] shadow-card">
                <Image
                  src="/intake-support.jpg"
                  alt="A hand resting gently on someone's shoulder during a coaching session"
                  fill
                  sizes="(max-width: 1024px) 90vw, 36rem"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-forest-deep/20 via-transparent to-transparent" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>Compassionate · Confidential</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                A safe place to be seen, heard, and supported.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-stone sm:text-lg">
                Every session is an invitation to breathe, process, and take
                meaningful steps toward wholeness — with a coach who walks
                beside you, not above you.
              </p>
              <p className="mt-3 text-base leading-relaxed text-stone sm:text-lg">
                Whether you arrive carrying a fresh wound or a story long
                quiet, the space you find here will be calm, judgment-free,
                and shaped by the heart of God.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FEE SCHEDULE */}
      <section className="py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Session Types</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                A clear overview of every session at a glance.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-paper">
                <div className="grid grid-cols-[1.6fr_1fr] gap-4 bg-forest px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream/85">
                  <span>Service</span>
                  <span className="text-right">Session Length</span>
                </div>
                {feeSchedule.map((row, i) => (
                  <div
                    key={row.service}
                    className={`grid grid-cols-[1.6fr_1fr] items-center gap-4 px-6 py-4 ${
                      i !== feeSchedule.length - 1
                        ? "border-b border-line"
                        : ""
                    }`}
                  >
                    <span className="text-sm font-medium text-forest">
                      {row.service}
                    </span>
                    <span className="text-right text-sm text-stone">
                      {row.length}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={210}>
              <div className="mt-8 flex flex-col items-start gap-4 rounded-3xl border border-gold/30 bg-gold/8 px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
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
              </div>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:sticky lg:top-28">
            <div className="rounded-3xl bg-forest p-8 text-cream">
              <h3 className="font-display text-xl font-medium">
                Payment &amp; Policies
              </h3>
              <ul className="mt-6 space-y-4">
                {paymentNotes.map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cream/12 text-gold">
                      <Check className="h-3 w-3" />
                    </span>
                    <span className="text-sm leading-relaxed text-cream/80">
                      {note}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-t border-cream/15 pt-6">
                <Button href="/policies" variant="light" className="w-full">
                  Read full policies
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FINAL CTA — counselor image (left) + Begin Your Healing Journey (right) */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grain absolute inset-0" aria-hidden="true" />
        <BotanicalArt className="absolute -right-12 -top-16 h-96 w-auto text-cream/8" />
        <BotanicalArt className="absolute -left-12 -bottom-20 h-80 w-auto rotate-180 text-cream/8" />
        <Container className="relative py-24 sm:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-lift">
                <Image
                  src="/counselor-sign.jpg"
                  alt="A green counselor sign — pointing the way to support"
                  fill
                  sizes="(max-width: 1024px) 90vw, 32rem"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div>
              <Reveal>
                <Eyebrow tone="light">Begin Your Healing Journey</Eyebrow>
              </Reveal>
              <Reveal delay={90}>
                <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight sm:text-4xl md:text-[2.6rem]">
                  You don&apos;t have to walk through it alone.
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-5 text-base leading-relaxed text-cream/75 sm:text-lg">
                  Whether you&apos;re seeking support for yourself, your teen,
                  or your family, you deserve a space where you can breathe,
                  process, and rebuild.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="/book" variant="light">
                    Book a Session
                  </Button>
                  <Button href="/about" variant="outline-light" icon={false}>
                    Meet Ife Williams
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
