"use client";

import { useState } from "react";
import { contactPaths, type ContactIntent } from "@/data/navigation";
import { company } from "@/data/company";
import { cx } from "@/lib/utils";

/**
 * Intent-aware enquiry form.
 *
 * NO BACKEND IS CONFIGURED. Rather than render a submit button that silently
 * does nothing — or worse, shows a fake success state — this form composes a
 * pre-filled email and hands it to the visitor's mail client. The enquiry
 * genuinely reaches ZEUS, and nothing pretends to be something it isn't.
 *
 * To switch to a real endpoint: set NEXT_PUBLIC_FORM_ENDPOINT and replace
 * `composeMailto` with a POST. Field names are already namespaced for it.
 * See README "Form integration".
 */
const intentFields: Record<
  ContactIntent,
  { label: string; name: string; type: "text" | "select"; options?: string[] }[]
> = {
  build: [
    { label: "Organisation", name: "organisation", type: "text" },
    {
      label: "What you need",
      name: "scope",
      type: "select",
      options: [
        "Modular data centre",
        "AI infrastructure",
        "Energy integration",
        "Engineering consulting",
        "Not sure yet",
      ],
    },
  ],
  host: [
    { label: "Organisation (optional)", name: "organisation", type: "text" },
    {
      label: "Approximate machine count",
      name: "machines",
      type: "select",
      options: ["1–10", "11–50", "51–200", "200+", "Not sure yet"],
    },
  ],
  invest: [
    { label: "Organisation / fund", name: "organisation", type: "text" },
    {
      label: "Enquiry type",
      name: "enquiry",
      type: "select",
      options: [
        "Participating in the raise",
        "Request further information",
        "Introductory conversation",
      ],
    },
  ],
};

const intentCopy: Record<ContactIntent, string> = {
  build:
    "Infrastructure and engineering enquiries — modular data centres, AI infrastructure, energy integration and consulting.",
  host: "Hosted mining enquiries. ZEUS runs and maintains client-owned equipment for a 10% service fee on earnings.",
  invest:
    "Investor enquiries relating to the $2.69M SSMDC raise.",
};

export function ContactForm({ initialIntent }: { initialIntent: ContactIntent }) {
  const [intent, setIntent] = useState<ContactIntent>(initialIntent);
  const [sent, setSent] = useState(false);

  const fields = intentFields[intent];
  const activePath = contactPaths.find((p) => p.id === intent);

  function composeMailto(form: HTMLFormElement) {
    const data = new FormData(form);
    const lines: string[] = [];

    for (const [key, value] of data.entries()) {
      if (key === "intent" || !value) continue;
      const label = key.charAt(0).toUpperCase() + key.slice(1);
      lines.push(`${label}: ${String(value)}`);
    }

    const subject = `${activePath?.label ?? "Enquiry"} — website enquiry`;
    return `mailto:${company.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.location.href = composeMailto(event.currentTarget);
    setSent(true);
  }

  return (
    <div>
      {/* Intent selector */}
      <fieldset className="mb-10">
        <legend className="tech-label mb-5">What is this about?</legend>
        <div
          role="radiogroup"
          aria-label="Enquiry type"
          className="grid grid-cols-1 gap-px bg-[var(--rule)] sm:grid-cols-3"
        >
          {contactPaths.map((path) => (
            <button
              key={path.id}
              type="button"
              role="radio"
              aria-checked={intent === path.id}
              onClick={() => {
                setIntent(path.id);
                setSent(false);
              }}
              className={cx(
                "p-6 text-left transition-colors duration-200",
                intent === path.id
                  ? "bg-carbon text-engineering"
                  : "bg-graphite text-steel hover:bg-carbon hover:text-engineering",
              )}
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden
                  className={cx(
                    "h-2 w-2 shrink-0",
                    intent === path.id ? "bg-amber" : "bg-[var(--rule-strong)]",
                  )}
                />
                <span className="display text-[1.25rem] leading-none">
                  {path.label}
                </span>
              </span>
            </button>
          ))}
        </div>
        <p className="mt-5 max-w-[56ch] text-sm leading-relaxed text-steel">
          {intentCopy[intent]}
        </p>
      </fieldset>

      <form onSubmit={handleSubmit} className="space-y-7">
        <input type="hidden" name="intent" value={intent} />

        {/* Honeypot — hidden from people, tempting to bots */}
        <div className="absolute left-[-9999px]" aria-hidden>
          <label htmlFor="company-website">Leave this empty</label>
          <input
            id="company-website"
            name="company-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          <Field label="Name" name="name" required />
          <Field label="Email" name="email" type="email" required />
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {fields.map((field) =>
            field.type === "select" ? (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="tech-label mb-3 block"
                >
                  {field.label}
                </label>
                <select
                  id={field.name}
                  name={field.name}
                  className="w-full rounded-[3px] border border-[var(--rule-strong)] bg-carbon px-4 py-3.5 text-engineering transition-colors duration-200 focus:border-amber"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <Field key={field.name} label={field.label} name={field.name} />
            ),
          )}
        </div>

        <div>
          <label htmlFor="message" className="tech-label mb-3 block">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-[3px] border border-[var(--rule-strong)] bg-carbon px-4 py-3.5 text-engineering transition-colors duration-200 placeholder:text-steel-dim focus:border-amber"
            placeholder="What are you trying to do?"
          />
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <button
            type="submit"
            className="group inline-flex items-center gap-3 rounded-[3px] bg-engineering px-7 py-4 text-sm font-medium text-graphite transition-colors duration-200 hover:bg-white"
          >
            Send enquiry
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </button>

          <p className="text-xs leading-relaxed text-steel-dim">
            Opens your email client with the enquiry prepared.
          </p>
        </div>

        <p
          role="status"
          aria-live="polite"
          className={cx(
            "text-sm transition-opacity duration-300",
            sent ? "text-amber opacity-100" : "opacity-0",
          )}
        >
          {sent
            ? `Your email client should have opened. If it didn't, write to ${company.email} directly.`
            : " "}
        </p>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="tech-label mb-3 block">
        {label}
        {required && (
          <span aria-hidden className="ml-1 text-amber">
            *
          </span>
        )}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-[3px] border border-[var(--rule-strong)] bg-carbon px-4 py-3.5 text-engineering transition-colors duration-200 placeholder:text-steel-dim focus:border-amber"
      />
    </div>
  );
}
