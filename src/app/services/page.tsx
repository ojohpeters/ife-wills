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
import { ArrowRight, Check, Icon } from "@/components/icons";
import {
  addOns,
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

      {/* ADD-ON */}
      <section className="bg-cream-deep/50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Additional Support"
            title="An intake session for a thoughtful starting point."
            description="When you're ready for ongoing work, an in-depth intake gives Ife a clear understanding of your story before coaching begins."
          />
          <div className="mx-auto mt-14 grid max-w-3xl gap-6">
            {addOns.map((addon, i) => (
              <Reveal key={addon.name} delay={i * 110}>
                <article className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8 sm:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-sage-soft/55 text-sage-deep">
                      <Icon name={addon.icon} className="h-6 w-6" />
                    </span>
                    <span className="font-display text-3xl font-medium text-forest">
                      {addon.fee}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-medium text-forest">
                    {addon.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-sage-deep">
                    {addon.length}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-stone">
                    {addon.note}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FEE SCHEDULE */}
      <section className="py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Session Types &amp; Fees</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                A clear, transparent overview of every rate.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-paper">
                <div className="grid grid-cols-[1.6fr_1fr_0.9fr] gap-4 bg-forest px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream/85">
                  <span>Service</span>
                  <span>Session Length</span>
                  <span className="text-right">Fee</span>
                </div>
                {feeSchedule.map((row, i) => (
                  <div
                    key={row.service}
                    className={`grid grid-cols-[1.6fr_1fr_0.9fr] items-center gap-4 px-6 py-4 ${
                      i !== feeSchedule.length - 1
                        ? "border-b border-line"
                        : ""
                    }`}
                  >
                    <span className="text-sm font-medium text-forest">
                      {row.service}
                    </span>
                    <span className="text-sm text-stone">{row.length}</span>
                    <span className="text-right font-display text-base font-medium leading-tight text-forest sm:text-lg">
                      {row.fee}
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

      {/* DECORATIVE BAND */}
      <section className="relative overflow-hidden bg-cream-deep/55 py-20">
        <BotanicalArt className="absolute -left-12 -top-10 h-72 w-auto text-sage/20" />
        <BotanicalArt className="absolute -right-12 -bottom-12 h-72 w-auto rotate-180 text-sage/20" />
        <Container className="relative text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl font-display text-2xl italic leading-relaxed text-forest sm:text-[1.7rem]">
              Whether you&apos;re seeking one-on-one support or the community
              of a group cohort, you deserve a space where you can heal, grow,
              and feel supported every step of the way.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        primary={{ href: "/book", label: "Book a Session" }}
        secondary={{ href: "/about", label: "Meet Ife Williams" }}
      />
    </>
  );
}
