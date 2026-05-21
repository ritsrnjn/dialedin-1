"use client";

import { useState } from "react";
import { SectionMarker } from "@/components/ui/section-marker";

const projectTypes = [
  "AI Agents",
  "Internal Software",
  "Data Infrastructure",
  "Technical Advisory",
  "Not sure yet",
];

const budgetRanges = [
  "< $25k",
  "$25k – $75k",
  "$75k – $200k",
  "$200k+",
  "Not sure",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="border-b border-rule">
      <div className="mx-auto max-w-[1280px] px-8 py-20 lg:py-24">
        <SectionMarker number="06" label="CONTACT" />

        <div className="mt-6 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="font-display max-w-md text-balance text-[34px] font-bold uppercase leading-[1.08] tracking-[-0.01em] text-ink sm:text-[40px] lg:text-[44px]">
              Tell us what you&apos;re trying to build.
            </h2>

            <p className="mt-5 max-w-md text-[16px] leading-[1.55] text-ink-muted">
              One short form. A real human reads every submission. We reply
              within two business hours with a yes, a no, or a question.
            </p>

            <dl className="mt-10 space-y-4 text-[14px]">
              <Stat label="Median reply" value="1h 42m" />
              <Stat label="No newsletter, no follow-up sequence" value="—" />
              <Stat
                label="If we&apos;re not a fit"
                value="We tell you that too."
              />
            </dl>
          </div>

          <div className="dashed-rule rounded-sm bg-paper-soft/40">
            <div className="flex items-center justify-between border-b border-rule px-5 py-3">
              <span className="mono-label text-mark">POST /scope-request</span>
              <span className="mono-label text-ink-faint">
                inbox · 1h 42m median
              </span>
            </div>

            {submitted ? (
              <SubmittedState onReset={() => setSubmitted(false)} />
            ) : (
              <form
                className="grid gap-5 p-6 sm:p-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: wire to real endpoint (Resend / Plunk / Supabase)
                  setSubmitted(true);
                }}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="01 · email" id="email">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="you@company.com"
                      className={fieldClasses}
                    />
                  </Field>

                  <Field label="02 · company" id="company">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Where you work"
                      className={fieldClasses}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="03 · project type" id="projectType">
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      defaultValue=""
                      className={fieldClasses}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {projectTypes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="04 · budget" id="budget">
                    <select
                      id="budget"
                      name="budget"
                      required
                      defaultValue=""
                      className={fieldClasses}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {budgetRanges.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>

                <Field label="05 · tell us about the project" id="details">
                  <textarea
                    id="details"
                    name="details"
                    required
                    rows={5}
                    placeholder="What are you trying to do? What's in the way? What does success look like?"
                    className={`${fieldClasses} resize-y`}
                  />
                </Field>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-rule pt-5">
                  <p className="font-mono text-[11px] text-ink-faint">
                    we read every submission. promise.
                  </p>
                  <button
                    type="submit"
                    className="mono-label inline-flex items-center gap-2 rounded-sm bg-mark px-5 py-2.5 text-paper shadow-[inset_0_-2px_0_0_rgba(0,0,0,0.12)] transition-colors hover:bg-mark-soft"
                  >
                    Send Scope Request <span aria-hidden>→</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const fieldClasses =
  "w-full rounded-sm border border-rule bg-paper px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none";

function Field({
  label,
  id,
  children,
}: {
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="mono-label text-ink-faint">
        {label}
      </label>
      {children}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-3">
      <dt className="text-[14px] text-ink-muted">{label}</dt>
      <dd className="font-mono text-[13px] font-medium text-ink tabular">
        {value}
      </dd>
    </div>
  );
}

function SubmittedState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-start gap-4 px-6 py-12 sm:px-7">
      <span className="mono-label rounded-sm border border-stable/40 bg-stable/10 px-2 py-1 text-stable">
        ✓ request received · queued
      </span>
      <h3 className="font-display text-[22px] font-bold uppercase leading-tight tracking-tight text-ink">
        Got it. We&apos;ll be in your inbox shortly.
      </h3>
      <p className="text-[14.5px] leading-[1.55] text-ink-muted">
        A human will read this within two business hours. If we&apos;re a fit,
        you&apos;ll get a short questionnaire and a 30-minute scoping call
        invite. If we&apos;re not, we&apos;ll tell you that too.
      </p>
      <button
        onClick={onReset}
        className="mono-label mt-2 text-ink-muted hover:text-ink"
      >
        ← send another
      </button>
    </div>
  );
}
