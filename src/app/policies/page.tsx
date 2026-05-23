import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import {
  BotanicalArt,
  Button,
  Container,
  CtaBand,
  PageHero,
} from "@/components/sections";
import { Check, Close, Icon } from "@/components/icons";
import { policies } from "@/lib/content";

export const metadata: Metadata = {
  title: "Policies",
  description:
    "Clear, compassionate guidelines designed to protect your time, privacy, and well-being — and to create a safe, respectful, consistent environment for healing.",
};

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="Policies"
        title="Clear, compassionate guidelines for a supportive counseling experience."
        description="To ensure every client receives the highest level of care, Ife Williams follows a set of policies designed to protect your time, privacy, and well-being — creating a safe, respectful, and consistent environment for healing."
      >
        <div className="flex flex-wrap gap-2">
          {policies.map((p) => (
            <a
              key={p.title}
              href={`#${slugify(p.title)}`}
              className="rounded-full border border-line bg-paper/70 px-3.5 py-1.5 text-xs font-medium text-forest transition-colors duration-200 hover:border-sage hover:bg-paper"
            >
              {p.title}
            </a>
          ))}
        </div>
      </PageHero>

      {/* POLICY CARDS */}
      <section className="py-24 sm:py-28">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {policies.map((policy, i) => (
              <Reveal key={policy.title} delay={(i % 2) * 90}>
                <article
                  id={slugify(policy.title)}
                  className="flex h-full scroll-mt-32 flex-col rounded-[2rem] border border-line bg-paper p-8 sm:p-10"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-forest text-cream">
                      <Icon name={policy.icon} className="h-6 w-6" />
                    </span>
                    <h2 className="font-display text-2xl font-medium text-forest">
                      {policy.title}
                    </h2>
                  </div>
                  {!policy.groups ? (
                    <ul className="mt-7 space-y-3.5">
                      {policy.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sage-soft/70 text-sage-deep">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-sm leading-relaxed text-stone">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-7 space-y-6">
                      {policy.groups!.map((group) => {
                        const muted = "tone" in group && group.tone === "muted";
                        return (
                          <div key={group.heading}>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-deep">
                              {group.heading}
                            </p>
                            <ul className="mt-3 space-y-3">
                              {group.items.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-3"
                                >
                                  <span
                                    className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                                      muted
                                        ? "bg-cream-deep text-stone"
                                        : "bg-sage-soft/70 text-sage-deep"
                                    }`}
                                  >
                                    {muted ? (
                                      <Close className="h-3 w-3" />
                                    ) : (
                                      <Check className="h-3 w-3" />
                                    )}
                                  </span>
                                  <span className="text-sm leading-relaxed text-stone">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                      {policy.note && (
                        <p className="rounded-2xl border border-line bg-cream-deep/55 px-4 py-3 text-xs leading-relaxed text-forest">
                          {policy.note}
                        </p>
                      )}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* CLOSING CALLOUT */}
      <section className="relative overflow-hidden bg-cream-deep/55 py-24 sm:py-28">
        <BotanicalArt className="absolute -left-10 -top-12 h-80 w-auto text-sage/20" />
        <BotanicalArt className="absolute -right-10 -bottom-12 h-80 w-auto rotate-180 text-sage/20" />
        <Container className="relative">
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-line bg-paper px-8 py-14 text-center sm:px-14">
              <p className="font-display text-2xl italic leading-relaxed text-forest sm:text-[1.7rem]">
                Your healing journey deserves clarity, safety, and consistency
                — and you can expect all three at every step.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/book">Book a Session</Button>
                <Button href="/services" variant="ghost" icon={false}>
                  View services &amp; fees
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        eyebrow="Questions?"
        title="A real person, ready to help."
        description="If you have questions about scheduling, payment, virtual sessions, or anything else, reach out — your comfort is the highest priority."
        secondary={{ href: "/about", label: "About Ife" }}
      />
    </>
  );
}
