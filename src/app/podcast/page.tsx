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
  Headphones,
  Mic,
  Quote,
  Star,
} from "@/components/icons";
import { podcast } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rebuilding Broken Walls Podcast",
  description:
    "A weekly podcast hosted by Ife Williams — healing, identity, and spiritual restoration for youth and young adults.",
};

const platforms = [
  { label: "Apple Podcasts", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Google Podcasts", href: "#" },
];

export default function PodcastPage() {
  return (
    <>
      <PageHero
        eyebrow="The Podcast"
        title="Rebuilding Broken Walls."
        description={podcast.tagline}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="#listen">Listen Now</Button>
          <Button href="/book" variant="ghost" icon={false}>
            Work with Ife
          </Button>
        </div>
      </PageHero>

      {/* ABOUT THE PODCAST + ART */}
      <section className="py-24 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
          <Reveal className="relative">
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative overflow-hidden rounded-[2.25rem] bg-linear-to-br from-forest via-forest-deep to-sage-deep p-10 shadow-lift">
                <div className="bg-grain absolute inset-0" aria-hidden="true" />
                <BotanicalArt className="absolute left-1/2 top-1/2 h-[120%] w-auto -translate-x-1/2 -translate-y-1/2 text-cream/10" />
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
                      Hosted by Ife Williams
                    </p>
                    <h2 className="mt-3 font-display text-[2.4rem] font-medium leading-[1.05] text-cream">
                      Rebuilding
                      <br />
                      Broken Walls
                    </h2>
                  </div>
                </div>
              </div>

              <div className="animate-float absolute -left-4 -top-3 flex items-center gap-3 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-card backdrop-blur-sm sm:-left-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-soft/70 text-sage-deep">
                  <Headphones className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">
                    New episodes
                  </p>
                  <p className="text-xs text-stone">every week</p>
                </div>
              </div>

              <div className="absolute -right-4 bottom-6 flex items-center gap-3 rounded-2xl border border-line bg-paper/95 px-4 py-3 shadow-card backdrop-blur-sm sm:-right-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/20 text-gold-deep">
                  <Star className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-forest">
                    Hope &amp; healing
                  </p>
                  <p className="text-xs text-stone">real conversations</p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>What the Podcast Is About</Eyebrow>
            </Reveal>
            <Reveal delay={90}>
              <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                Speaking to the silent battles young people and adults carry.
              </h2>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-base leading-relaxed text-stone">
                {podcast.about}
              </p>
            </Reveal>
            <Reveal delay={210}>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-sage-deep">
                Listeners learn to
              </p>
              <ul className="mt-4 space-y-3">
                {podcast.helps.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-soft/70 text-sage-deep">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* EPISODES */}
      <section className="bg-cream-deep/50 py-24 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Popular Episode Themes"
            title="Real conversations, real healing."
            description="Each episode blends biblical wisdom, trauma-informed insight, and stories that help listeners take the next honest step."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {podcast.episodes.map((episode, i) => (
              <Reveal key={episode.n} delay={(i % 3) * 110}>
                <Link
                  href="#listen"
                  className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-card"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-medium text-cream-deep">
                      {episode.n}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cream-deep/70 text-forest transition-colors duration-300 group-hover:bg-forest group-hover:text-cream">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-medium leading-snug text-forest">
                    {episode.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                    {episode.blurb}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY IT MATTERS */}
      <section className="relative overflow-hidden bg-forest text-cream">
        <div className="bg-grain absolute inset-0" aria-hidden="true" />
        <BotanicalArt className="absolute -right-12 -top-16 h-96 w-auto text-cream/8" />
        <Container className="relative py-24 sm:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <div className="flex justify-center">
                <Eyebrow tone="light">Why This Podcast Matters</Eyebrow>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <Quote className="mx-auto mt-7 h-10 w-10 text-gold" />
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 font-display text-2xl italic leading-relaxed text-cream sm:text-3xl md:text-[2rem]">
                Young people and adults need voices that speak truth, hope,
                and healing. This podcast creates a safe space for listeners
                to learn, grow, and encounter God&apos;s heart for
                restoration.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* LISTEN & SUBSCRIBE */}
      <section id="listen" className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow>Listen &amp; Subscribe</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-3xl font-medium leading-[1.14] tracking-tight text-forest sm:text-4xl">
                  New episodes every week, on every major platform.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-5 text-base leading-relaxed text-stone">
                  Follow Rebuilding Broken Walls wherever you listen — and
                  share your story if an episode speaks to your journey.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {platforms.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper px-5 py-3 text-sm font-medium text-forest transition-all duration-300 hover:-translate-y-0.5 hover:border-sage hover:shadow-soft"
                    >
                      <Headphones className="h-4 w-4 text-sage-deep" />
                      {p.label}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="rounded-[2rem] border border-line bg-cream-deep/55 p-8 sm:p-10">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-forest text-cream">
                  <Mic className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium text-forest">
                  Share your story
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-stone">
                  Has your healing journey been shaped by something you&apos;ve
                  heard on the show? Send a note — your story could encourage
                  someone else navigating the same broken places.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href="/book">Reach out</Button>
                  <Button href="/about" variant="ghost" icon={false}>
                    About the host
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        eyebrow="Beyond the Podcast"
        title="When you're ready, the next step is waiting."
        description="If something you've heard has stirred a desire for real change, coaching with Ife may be the next honest step toward it."
        primary={{ href: "/book", label: "Book a Session" }}
        secondary={{ href: "/services", label: "See services" }}
      />
    </>
  );
}
