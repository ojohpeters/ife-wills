"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "@/components/icons";
import { speaking } from "@/lib/content";

const fieldClass =
  "w-full rounded-xl border border-line bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-stone/55 transition-colors duration-200 focus:border-sage-deep focus:bg-paper focus:outline-none focus:ring-2 focus:ring-sage/35";

const labelClass =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-sage-deep";

export default function SpeakingForm() {
  const [submitted, setSubmitted] = useState(false);
  const { formOptions, signature, bookingEmail } = speaking;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex min-h-[32rem] flex-col items-center justify-center rounded-[2rem] border border-line bg-paper p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-forest text-cream">
          <Check className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-medium text-forest">
          Thank you for the invitation.
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-stone">
          Your inquiry has been received. Ife will personally review the
          details of your event and reply with availability, fit, and next
          steps. You can expect to hear back within a few business days.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-7 text-sm font-medium text-forest underline underline-offset-4 transition-colors hover:text-sage-deep"
        >
          Submit another inquiry
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
        Speaking inquiry
      </h3>
      <p className="mt-2 text-sm text-stone">
        Share the details below and Ife will be in touch with availability
        and next steps.
      </p>

      <div className="mt-8 space-y-7">
        {/* Contact */}
        <fieldset className="space-y-5">
          <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-deep">
            Your details
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className={labelClass}>
                First name <span className="text-gold-deep">*</span>
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
                Last name <span className="text-gold-deep">*</span>
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
                Email <span className="text-gold-deep">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@organization.org"
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
            <label htmlFor="organization" className={labelClass}>
              Organization / event name{" "}
              <span className="text-gold-deep">*</span>
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              required
              autoComplete="organization"
              placeholder="Riverstone Community Church / Hope Rising Conference"
              className={fieldClass}
            />
          </div>
        </fieldset>

        {/* Event */}
        <fieldset className="space-y-5 border-t border-line pt-7">
          <legend className="text-xs font-semibold uppercase tracking-[0.18em] text-sage-deep">
            Event details
          </legend>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="eventType" className={labelClass}>
                Type of event <span className="text-gold-deep">*</span>
              </label>
              <select
                id="eventType"
                name="eventType"
                required
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select event type
                </option>
                {formOptions.eventTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="attendance" className={labelClass}>
                Estimated attendance{" "}
                <span className="text-gold-deep">*</span>
              </label>
              <select
                id="attendance"
                name="attendance"
                required
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select range
                </option>
                {formOptions.attendance.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="dates" className={labelClass}>
                Event date(s) <span className="text-gold-deep">*</span>
              </label>
              <input
                id="dates"
                name="dates"
                type="text"
                required
                placeholder="e.g. Oct 17–19, 2026"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="location" className={labelClass}>
                Location <span className="text-gold-deep">*</span>
              </label>
              <input
                id="location"
                name="location"
                type="text"
                required
                placeholder="City, State / Virtual"
                className={fieldClass}
              />
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="format" className={labelClass}>
                Format
              </label>
              <select
                id="format"
                name="format"
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select format
                </option>
                {formOptions.formats.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className={labelClass}>
                Estimated speaker budget{" "}
                <span className="text-gold-deep">*</span>
              </label>
              <select
                id="budget"
                name="budget"
                required
                defaultValue=""
                className={fieldClass}
              >
                <option value="" disabled>
                  Select range (excl. travel)
                </option>
                {formOptions.budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="topic" className={labelClass}>
              Topic interest
            </label>
            <select
              id="topic"
              name="topic"
              defaultValue=""
              className={fieldClass}
            >
              <option value="">Not sure yet — open to recommendation</option>
              {signature.topics.map((t) => (
                <option key={t.title} value={t.title}>
                  {t.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="description" className={labelClass}>
              Tell us about your event{" "}
              <span className="text-gold-deep">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              placeholder="Share your audience, theme, hopes for the time, and anything you'd love Ife to know about the room he'll be walking into."
              className={`${fieldClass} resize-none`}
            />
          </div>
          <div>
            <label htmlFor="hearAbout" className={labelClass}>
              How did you hear about Ife?
            </label>
            <select
              id="hearAbout"
              name="hearAbout"
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Select an option
              </option>
              {formOptions.hearAbout.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-7 py-4 text-sm font-medium text-cream shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-forest-deep hover:shadow-lift"
      >
        Submit speaking inquiry
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-stone">
        Prefer email? Reach out at{" "}
        <a
          href={`mailto:${bookingEmail}`}
          className="font-medium text-forest underline underline-offset-2"
        >
          {bookingEmail}
        </a>
        .
      </p>
    </form>
  );
}
