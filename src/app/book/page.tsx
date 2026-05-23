import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import BookingForm from "@/components/BookingForm";
import {
  BotanicalArt,
  Button,
  Container,
  CtaBand,
  Eyebrow,
  PageHero,
  SectionHeading,
} from "@/components/sections";
import { Check, Icon, Mail, Phone } from "@/components/icons";
import { afterBooking, bookingSteps, feeSchedule, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Book a Session",
  description:
    "Take the first step toward healing and wholeness. Schedule your session with Ife Williams online, by phone, or by email.",
};

export default function BookPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a Session"
        title="Take the first step toward healing and wholeness."
        description="Choosing to begin counseling is a courageous and meaningful decision. Whether you're seeking support for yourself or your family, Ife offers a safe, confidential, and compassionate space — and you'll be guided every step of the way."
      />

      {/* BOOKING WAYS */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Schedule Your Session"
            title="Three easy ways to book your appointment."
            description="Choose whatever feels most comfortable for you. Every path leads to the same warm, supportive welcome."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {bookingSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 110}>
                <article className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-sage-soft/55 text-sage-deep">
                      <Icon name={step.icon} className="h-6 w-6" />
                    </span>
                    {step.badge && (
                      <span className="rounded-full bg-gold/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-deep">
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-medium text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                    {step.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="bg-cream-deep/50 py-24 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-14">
          <Reveal>
            <BookingForm />
          </Reveal>

          <div className="space-y-6 lg:sticky lg:top-28">
            <Reveal delay={120}>
              <div className="rounded-3xl border border-line bg-paper p-8">
                <Eyebrow>What to Expect After Booking</Eyebrow>
                <h3 className="mt-4 font-display text-xl font-medium text-forest">
                  You&apos;ll be supported from the very first email.
                </h3>
                <ul className="mt-6 space-y-3">
                  {afterBooking.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-soft/70 text-sage-deep">
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="text-sm leading-relaxed text-stone">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-2xl bg-cream-deep/55 px-4 py-3 text-xs font-medium leading-relaxed text-forest">
                  Your privacy and comfort are our highest priority.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-3xl bg-forest p-8 text-cream">
                <h3 className="font-display text-xl font-medium">
                  Prefer to reach out directly?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  Send a message or call — you&apos;ll always reach a real,
                  compassionate response.
                </p>
                <div className="mt-6 space-y-4">
                  <a
                    href={`mailto:${site.email}`}
                    className="group flex items-center gap-3 text-sm font-medium text-cream"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-gold transition-colors group-hover:bg-cream group-hover:text-forest">
                      <Mail className="h-5 w-5" />
                    </span>
                    {site.email}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
                    className="group flex items-center gap-3 text-sm font-medium text-cream"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-gold transition-colors group-hover:bg-cream group-hover:text-forest">
                      <Phone className="h-5 w-5" />
                    </span>
                    {site.phone}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FEES OVERVIEW */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Session Types & Fees"
            title="Transparent rates so you can plan with confidence."
            description="Sliding-scale options are available upon request. Virtual sessions are offered in approved regions."
          />
          <Reveal delay={120}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-paper">
              <div className="grid grid-cols-[1.6fr_1fr_0.7fr] gap-4 bg-forest px-6 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream/85 sm:px-8">
                <span>Service</span>
                <span>Session Length</span>
                <span className="text-right">Fee</span>
              </div>
              {feeSchedule.map((row, i) => (
                <div
                  key={row.service}
                  className={`grid grid-cols-[1.6fr_1fr_0.7fr] items-center gap-4 px-6 py-4 sm:px-8 ${
                    i !== feeSchedule.length - 1
                      ? "border-b border-line"
                      : ""
                  }`}
                >
                  <span className="text-sm font-medium text-forest">
                    {row.service}
                  </span>
                  <span className="text-sm text-stone">{row.length}</span>
                  <span className="text-right font-display text-lg font-medium text-forest">
                    {row.fee}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/services" variant="ghost">
                See full service details
              </Button>
              <Button href="/policies" variant="ghost" icon={false}>
                Read policies
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* RELATIVE BAND */}
      <section className="relative overflow-hidden bg-cream-deep/55 py-20">
        <BotanicalArt className="absolute -left-12 -top-10 h-72 w-auto text-sage/20" />
        <BotanicalArt className="absolute -right-12 -bottom-10 h-72 w-auto rotate-180 text-sage/20" />
        <Container className="relative text-center">
          <Reveal>
            <p className="mx-auto max-w-2xl font-display text-2xl italic leading-relaxed text-forest sm:text-[1.7rem]">
              Taking this step is an act of courage — and you deserve support
              that honors your story.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        eyebrow="You're Not Alone"
        title="Let's begin this journey together."
        description="Your path toward clarity, strength, and restoration starts here."
        primary={{ href: "#top", label: "Request a session" }}
        secondary={{ href: "/about", label: "About Ife" }}
      />
    </>
  );
}
