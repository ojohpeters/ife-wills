import type { Metadata } from "next";
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
import { Check, Icon, Quote, Sprout } from "@/components/icons";
import {
  aboutSafeSpace,
  credentials,
  expertise,
  scripture,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About Ife Williams",
  description:
    "For more than two decades, Ife Williams has dedicated his life to helping individuals, youth, and families navigate trauma, emotional pain, and life's hardest seasons.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Ife Williams"
        title="A trusted guide for healing, restoration, and emotional resilience."
        description="For more than two decades, Ife Williams has dedicated his life to helping individuals, young adults, and families navigate emotional pain, trauma, and life's most challenging seasons."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/book">Book a Session</Button>
          <Button href="/services" variant="ghost" icon={false}>
            Explore Services
          </Button>
        </div>
      </PageHero>

      {/* BIO */}
      <section className="py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
          <div>
            <Reveal>
              <Eyebrow>The Heart Behind the Practice</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                A rare combination of non-clinical understanding, spiritual
                insight, and compassionate presence.
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone">
              <Reveal delay={140}>
                <p>
                  As a Certified Christian Trauma Care Provider,
                  Board-Certified Youth Mental Health Coach, and Certified
                  Master Trauma-Informed Care Coach, Ife brings a depth of
                  experience few can match. His coaching is built on a simple
                  but powerful foundation:{" "}
                  <span className="font-medium text-forest">
                    every person deserves a safe place to heal, grow, and
                    rediscover hope.
                  </span>
                </p>
              </Reveal>
              <Reveal delay={190}>
                <p>
                  His approach is gentle yet deeply informed, integrating
                  trauma-aware strategies with faith-aligned principles for
                  clients who desire them. Whether someone is processing past
                  wounds, navigating emotional overwhelm, or seeking clarity in
                  a difficult season, Ife provides a steady, grounded, and
                  supportive environment where healing can begin.
                </p>
              </Reveal>
            </div>

            <Reveal delay={240}>
              <div className="mt-8 rounded-3xl border border-line bg-cream-deep/55 p-7">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest text-cream">
                    <Sprout className="h-5 w-5" />
                  </span>
                  <p className="font-display text-lg font-medium text-forest">
                    Coaching, not ministry
                  </p>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  While Ife is also a pastor, his coaching is{" "}
                  <span className="font-medium text-forest">
                    not a ministry
                  </span>{" "}
                  — it is a professional, confidential, and structured service
                  designed to support your emotional and mental well-being.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Portrait + credentials */}
          <Reveal delay={160} className="relative lg:sticky lg:top-28">
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
                    Trauma-Informed Coach &amp; Pastor
                  </p>
                  <div className="mt-7 w-full space-y-3 border-t border-cream/15 pt-7 text-left">
                    {credentials.map((credential) => (
                      <div
                        key={credential}
                        className="flex items-start gap-2.5"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        <span className="text-sm text-cream/80">
                          {credential}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* SCRIPTURE / CALLING */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grain absolute inset-0" aria-hidden="true" />
        <BotanicalArt className="absolute -right-12 -top-16 h-96 w-auto text-cream/8" />
        <Container className="relative py-24 sm:py-28">
          <SectionHeading
            eyebrow="A Calling Rooted in Scripture & Compassion"
            title="His work is shaped by the heart of restoration."
            description="Ife's calling reflects the promise of binding up the brokenhearted, proclaiming freedom, and rebuilding what has long been devastated — walking with people through their pain toward strength and dignity."
            tone="light"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
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

      {/* EXPERTISE */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Professional Expertise with a Personal Touch"
            title="Decades of experience across a wide range of needs."
            description="Ife's experience allows him to support people through many of life's most difficult and tender places."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, i) => (
              <Reveal key={item} delay={i * 80}>
                <div className="flex items-center gap-4 rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-soft/55 text-sage-deep">
                    <Check className="h-5 w-5" />
                  </span>
                  <p className="font-medium text-forest">{item}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* SAFE SPACE PRINCIPLES */}
      <section className="bg-cream-deep/50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="A Safe Space for Your Story"
            title="Healing happens when people feel seen, heard, and supported."
            description="Every session is an invitation to breathe, process, and take meaningful steps toward wholeness."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutSafeSpace.map((item, i) => (
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

      {/* CLOSING STATEMENT */}
      <section className="py-24 sm:py-28">
        <Container>
          <Reveal>
            <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2.5rem] border border-line bg-cream-deep/55 px-8 py-16 text-center sm:px-14">
              <BotanicalArt className="absolute -left-10 -bottom-12 h-72 w-auto text-sage/20" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-cream mx-auto">
                  <Sprout className="h-7 w-7" />
                </span>
                <h2 className="mt-7 font-display text-3xl font-medium leading-[1.16] tracking-tight text-forest sm:text-[2.4rem]">
                  Walking with you toward restoration.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-stone">
                  Whether you are seeking healing from past trauma, support for
                  your teen, or guidance through a difficult season, Ife is
                  committed to walking with you — one step at a time. You
                  deserve healing. You deserve hope. You deserve a future that
                  feels whole again.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button href="/book">Begin your healing journey</Button>
                  <Button href="/podcast" variant="ghost" icon={false}>
                    Listen to the podcast
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
