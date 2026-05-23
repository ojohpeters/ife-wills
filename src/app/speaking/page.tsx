import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SpeakingForm from "@/components/SpeakingForm";
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
  Headphones,
  Icon,
  Mail,
  Mic,
  Phone,
  Quote,
  Star,
} from "@/components/icons";
import { credentials, podcast, site, speaking } from "@/lib/content";

export const metadata: Metadata = {
  title: "Speaking & Events",
  description:
    "Invite Ife Williams to speak at your next church, conference, retreat, school, or community gathering — trauma-informed insight and faith-rooted hope for every room.",
};

export default function SpeakingPage() {
  return (
    <>
      <PageHero
        eyebrow={speaking.hero.eyebrow}
        title={speaking.hero.title}
        description={speaking.hero.description}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#inquire">Invite Ife to speak</Button>
          <Button href="#topics" variant="ghost" icon={false}>
            See signature topics
          </Button>
        </div>
      </PageHero>

      {/* ============ SPEAKER BIO ============ */}
      <section className="py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-[2.25rem] bg-linear-to-br from-forest via-forest-deep to-sage-deep p-9 shadow-lift">
                <div className="bg-grain absolute inset-0" aria-hidden="true" />
                <BotanicalArt className="absolute -right-8 -top-8 h-72 w-auto text-cream/10" />
                <div className="relative flex aspect-[4/5] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-cream/10 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cream/85">
                      Available now
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-forest-deep">
                      <Mic className="h-6 w-6" />
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                      Speaking · Trauma-Informed · Faith-Rooted
                    </p>
                    <p className="mt-3 font-display text-[2.2rem] font-medium leading-[1.05] text-cream">
                      Ife Williams
                    </p>
                    <p className="mt-1 font-display text-base italic text-cream/70">
                      Pastor, coach &amp; speaker
                    </p>
                  </div>
                </div>
              </div>

              <div className="animate-float absolute -left-4 top-12 flex items-center gap-3 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-card backdrop-blur-sm sm:-left-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-soft/65 text-sage-deep">
                  <Star className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">
                    20+ years
                  </p>
                  <p className="text-xs text-stone">of pastoral &amp; coaching practice</p>
                </div>
              </div>

              <div className="absolute -bottom-5 -right-3 flex items-center gap-3 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-card backdrop-blur-sm sm:-right-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold-deep">
                  <Headphones className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">
                    Hosts a podcast
                  </p>
                  <p className="text-xs text-stone">Rebuilding Broken Walls</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Eyebrow>{speaking.bio.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                {speaking.bio.title}
              </h2>
            </Reveal>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-stone">
              {speaking.bio.paragraphs.map((p, i) => (
                <Reveal key={i} delay={140 + i * 60}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={320}>
              <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2.5 text-sm text-ink"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-deep" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#inquire">Contact Ife</Button>
                <Button href="/about" variant="ghost" icon={false}>
                  Full story
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ SIGNATURE MESSAGE + TOPICS ============ */}
      <section
        id="topics"
        className="relative overflow-hidden bg-cream-deep/55 py-24 sm:py-28"
      >
        <BotanicalArt className="absolute -left-10 -top-12 h-80 w-auto text-sage/20" />
        <BotanicalArt className="absolute -right-12 -bottom-16 h-80 w-auto rotate-180 text-sage/20" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex justify-center">
                <Eyebrow>{speaking.signature.eyebrow}</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-6 font-display text-3xl font-medium leading-[1.12] tracking-tight text-forest sm:text-4xl md:text-[2.85rem]">
                {speaking.signature.title}
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-3 font-display text-base italic text-sage-deep sm:text-lg">
                {speaking.signature.tagline}
              </p>
            </Reveal>
            <Reveal delay={210}>
              <p className="mx-auto mt-7 max-w-2xl font-display text-xl italic leading-relaxed text-forest sm:text-2xl">
                &ldquo;{speaking.signature.core}&rdquo;
              </p>
            </Reveal>
            <Reveal delay={270}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone">
                {speaking.signature.body}
              </p>
            </Reveal>
          </div>

          <div className="mt-16">
            <Reveal>
              <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-sage-deep">
                Speaking Topics Include
              </p>
            </Reveal>
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {speaking.signature.topics.map((topic, i) => (
                <Reveal key={topic.title} delay={(i % 4) * 90}>
                  <article className="group flex h-full items-start gap-3 rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sage-soft/55 text-sage-deep transition-colors group-hover:bg-forest group-hover:text-cream">
                      <Icon name={topic.icon} className="h-5 w-5" />
                    </span>
                    <p className="text-sm font-medium leading-snug text-forest">
                      {topic.title}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="What hosts are saying"
            title="A speaker your audience will remember."
            description="Event hosts describe Ife as steady in the planning, generous on the platform, and lasting in the impact on the room."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {speaking.testimonials.map((t, i) => (
              <Reveal key={t.attribution} delay={i * 130}>
                <figure className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8 sm:p-10">
                  <Quote className="h-9 w-9 text-gold-deep" />
                  <blockquote className="mt-5 flex-1 font-display text-xl italic leading-relaxed text-forest">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-7 border-t border-line pt-5 text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                    — {t.attribution}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ============ MEDIA / PODCAST ============ */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grain absolute inset-0" aria-hidden="true" />
        <BotanicalArt className="absolute -right-12 -top-16 h-96 w-auto text-cream/8" />
        <BotanicalArt className="absolute -left-12 -bottom-20 h-80 w-auto rotate-180 text-cream/8" />
        <Container className="relative py-24 sm:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
            <Reveal>
              <Eyebrow tone="light">{speaking.media.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-cream sm:text-4xl">
                {speaking.media.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-cream/70">
                {speaking.media.description}
              </p>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                Popular episode themes
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {podcast.episodes.map((ep) => (
                  <li
                    key={ep.n}
                    className="flex items-start gap-3 text-sm leading-snug text-cream/80"
                  >
                    <span className="font-display text-base font-medium text-gold">
                      {ep.n}
                    </span>
                    {ep.title}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/podcast" variant="light">
                  Visit the podcast
                </Button>
                <Button href="#inquire" variant="outline-light" icon={false}>
                  Invite Ife to speak
                </Button>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative">
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative overflow-hidden rounded-[2.25rem] border border-cream/15 bg-cream/5 p-10 backdrop-blur-sm">
                  <BotanicalArt className="absolute left-1/2 top-1/2 h-[120%] w-auto -translate-x-1/2 -translate-y-1/2 text-cream/12" />
                  <div className="relative flex aspect-square flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-cream/10 px-3.5 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-cream/85">
                        Weekly Episodes
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold text-forest-deep">
                        <Mic className="h-6 w-6" />
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                        Hear Ife&apos;s voice
                      </p>
                      <h3 className="mt-3 font-display text-[2.2rem] font-medium leading-[1.05] text-cream">
                        Rebuilding
                        <br />
                        Broken Walls
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ BOOK TO SPEAK ============ */}
      <section id="inquire" className="bg-cream-deep/50 py-24 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-14">
          <Reveal>
            <SpeakingForm />
          </Reveal>

          <div className="space-y-6 lg:sticky lg:top-28">
            <Reveal delay={120}>
              <div className="rounded-3xl border border-line bg-paper p-8">
                <Eyebrow>{speaking.contact.eyebrow}</Eyebrow>
                <h3 className="mt-4 font-display text-2xl font-medium leading-snug text-forest">
                  {speaking.contact.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  {speaking.contact.description}
                </p>
                <div className="mt-7 space-y-4">
                  <a
                    href={`mailto:${speaking.bookingEmail}`}
                    className="group flex items-center gap-3 text-sm font-medium text-forest"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-gold transition-colors group-hover:bg-forest-deep">
                      <Mail className="h-5 w-5" />
                    </span>
                    {speaking.bookingEmail}
                  </a>
                  <a
                    href={`tel:${site.phone.replace(/[^0-9]/g, "")}`}
                    className="group flex items-center gap-3 text-sm font-medium text-forest"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-gold transition-colors group-hover:bg-forest-deep">
                      <Phone className="h-5 w-5" />
                    </span>
                    {site.phone}
                  </a>
                </div>
                <p className="mt-6 rounded-2xl bg-cream-deep/55 px-4 py-3 text-xs leading-relaxed text-forest">
                  Expect a personal reply within a few business days.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-3xl bg-forest p-8 text-cream">
                <h3 className="font-display text-xl font-medium">
                  Looking for 1:1 coaching instead?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/70">
                  If you&apos;re seeking personal support — not a speaking
                  engagement — the coaching practice may be the better fit.
                </p>
                <Link
                  href="/book"
                  className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold"
                >
                  Book a coaching session
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="A Voice for Your Room"
        title="Bring healing, honesty, and hope to your audience."
        description="From intimate retreats to large conferences — Ife is honored to be considered as part of your next gathering."
        primary={{ href: "#inquire", label: "Send an inquiry" }}
        secondary={{ href: "/podcast", label: "Listen to the podcast" }}
      />
    </>
  );
}
