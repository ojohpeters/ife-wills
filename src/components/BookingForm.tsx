"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "@/components/icons";
import { services, site } from "@/lib/content";

const fieldClass =
  "w-full rounded-xl border border-line bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-stone/55 transition-colors duration-200 focus:border-sage-deep focus:bg-paper focus:outline-none focus:ring-2 focus:ring-sage/35";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-sage-deep";

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[30rem] flex-col items-center justify-center rounded-[2rem] border border-line bg-paper p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-cream">
          <Check className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-medium text-forest">
          Thank you for reaching out.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone">
          Your request has been received. You&apos;ll get a confirmation soon
          with next steps, intake forms, and instructions to prepare for your
          session. Taking this step is an act of courage.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-medium text-forest underline underline-offset-4 transition-colors hover:text-sage-deep"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-line bg-paper p-8 sm:p-10"
    >
      <h3 className="font-display text-2xl font-medium text-forest">
        Request your appointment
      </h3>
      <p className="mt-2 text-sm text-stone">
        Share a few details and you&apos;ll be guided every step of the way.
      </p>

      <div className="mt-7 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className={labelClass}>
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              placeholder="Jane"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="lastName" className={labelClass}>
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              placeholder="Doe"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="email" className={labelClass}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="jane@example.com"
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(555) 000-0000"
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className={labelClass}>
            Area of support
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={fieldClass}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Intake & Assessment Session">
              Intake &amp; Assessment Session
            </option>
            <option value="Not sure yet">
              I&apos;m not sure yet — please advise
            </option>
          </select>
        </div>

        <div>
          <label htmlFor="preferred" className={labelClass}>
            Preferred days &amp; times
          </label>
          <input
            id="preferred"
            name="preferred"
            type="text"
            placeholder="e.g. Weekday mornings, Tuesday or Thursday"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelClass}>
            Anything you&apos;d like to share
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell Ife a little about what brings you here — only as much as you feel comfortable sharing."
            className={`${fieldClass} resize-none`}
          />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-sm font-medium text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-lift"
      >
        Send booking request
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-stone">
        Prefer email? Reach out directly at{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-medium text-forest underline underline-offset-2"
        >
          {site.email}
        </a>
        . Your privacy and comfort are the highest priority.
      </p>
    </form>
  );
}
