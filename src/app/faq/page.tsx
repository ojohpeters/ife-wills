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
} from "@/components/sections";
import { ArrowRight, Icon } from "@/components/icons";
import { faqs, financialNote, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about Ife Williams' virtual, Scripture-guided, trauma-informed coaching practice.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Clear answers about how coaching with Ife works."
        description="If you don't see what you're looking for below, reach out anytime — Ife will personally reply with the clarity you need."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/book">Book a Session</Button>
          <Button href={`mailto:${site.email}`} variant="ghost" icon={false}>
            Email Ife
          </Button>
        </div>
      </PageHero>

      <section className="py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start lg:gap-16">
          {/* FAQ list */}
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] border border-line bg-paper">
              {faqs.map((item, i) => (
                <details
                  key={item.q}
                  className="group border-b border-line px-7 py-6 open:bg-cream-deep/40 last:border-0 sm:px-8"
                  open={i === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-6 list-none">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 text-xs font-semibold tracking-[0.18em] text-sage-deep">
                        Q{String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-display text-lg font-medium leading-snug text-forest sm:text-xl">
                        {item.q}
                      </p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-forest transition-transform duration-300 group-open:rotate-45 group-open:border-forest">
                      <span className="text-xl leading-none">+</span>
                    </span>
                  </summary>
                  <p className="mt-4 pl-0 text-sm leading-relaxed text-stone sm:pl-12 sm:text-base">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <Reveal delay={120}>
              <div className="rounded-3xl border border-gold/30 bg-gold/8 p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gold/25 text-gold-deep">
                    <Icon name="heart" className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-medium text-forest">
                      {financialNote.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-stone">
                      {financialNote.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="relative overflow-hidden rounded-3xl bg-forest p-8 text-cream">
                <BotanicalArt className="absolute -right-6 -bottom-6 h-44 w-auto text-cream/8" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                    Still have questions?
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-medium leading-snug">
                    Reach out — we&apos;ll respond personally.
                  </h3>
                  <div className="mt-7 space-y-3">
                    <a
                      href={`mailto:${site.email}`}
                      className="group flex items-center gap-3 text-sm font-medium text-cream"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-gold transition-colors group-hover:bg-cream/20">
                        <Icon name="mail" className="h-5 w-5" />
                      </span>
                      {site.email}
                    </a>
                    <a
                      href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
                      className="group flex items-center gap-3 text-sm font-medium text-cream"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-gold transition-colors group-hover:bg-cream/20">
                        <Icon name="phone" className="h-5 w-5" />
                      </span>
                      {site.phone}
                    </a>
                  </div>
                  <Link
                    href="/book"
                    className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-gold"
                  >
                    Schedule a consultation
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="rounded-3xl border border-line bg-paper p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                  Related
                </p>
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <Link
                      href="/services/one-on-one"
                      className="group flex items-start justify-between gap-3 text-forest"
                    >
                      <div>
                        <p className="font-medium">One-on-One Coaching</p>
                        <p className="mt-0.5 text-xs text-stone">
                          Private, personalized sessions
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/group-coaching"
                      className="group flex items-start justify-between gap-3 text-forest"
                    >
                      <div>
                        <p className="font-medium">Group Coaching</p>
                        <p className="mt-0.5 text-xs text-stone">
                          Grave Mind to Grace Mind cohort
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/policies"
                      className="group flex items-start justify-between gap-3 text-forest"
                    >
                      <div>
                        <p className="font-medium">Policies</p>
                        <p className="mt-0.5 text-xs text-stone">
                          Scheduling, payment, scope of practice
                        </p>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand secondary={{ href: "/services", label: "View services & fees" }} />
    </>
  );
}
