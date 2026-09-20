"use client";

import { useId, useState } from "react";
import { useSearchParams } from "next/navigation";
import { contactPaths, type ContactIntent } from "@/data/navigation";
import { enquiryForms, type Field } from "@/data/enquiry";
import { company } from "@/data/company";
import { cx } from "@/lib/utils";
import { getDictionary } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";

/**
 * The Build / Host / Invest funnels.
 *
 * TRANSPORT. If NEXT_PUBLIC_FORM_ENDPOINT is set the form POSTs to it and runs
 * a real submitting / sent / error cycle. If it is not set, the form composes
 * a pre-filled email and hands it to the visitor's mail client.
 *
 * What it never does is fake a success state. A submit button that reports
 * "thank you" into a void is worse than no form, because the enquiry is lost
 * and nobody knows. With no endpoint configured the button says so.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

type Status = "idle" | "submitting" | "sent" | "error";

const validIntents = contactPaths.map((p) => p.id) as readonly string[];

export function ContactForm({ lang }: { lang: Locale }) {
  const d = getDictionary(lang);
  // Read on the client: a server-side searchParams prop would make the route
  // dynamic, and this site is exported as static HTML.
  const params = useSearchParams();
  const requested = params.get("intent");
  const initialIntent: ContactIntent = validIntents.includes(requested ?? "")
    ? (requested as ContactIntent)
    : "build";

  const [intent, setIntent] = useState<ContactIntent>(initialIntent);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const uid = useId();

  const form = enquiryForms[intent];

  function validate(data: FormData) {
    const found: Record<string, string> = {};
    for (const field of form.fields) {
      if (!field.required) continue;
      const value = String(data.get(field.name) ?? "").trim();
      if (!value) {
        found[field.name] = `${field.label} is required.`;
      } else if (
        field.type === "email" &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
      ) {
        found[field.name] = "Enter a valid email address.";
      }
    }
    return found;
  }

  function composeMailto(data: FormData) {
    const lines: string[] = [];
    for (const field of form.fields) {
      const raw = data.get(field.name);
      const value =
        field.type === "checkbox" ? (raw ? "Yes" : "") : String(raw ?? "");
      if (value.trim()) lines.push(`${field.label}: ${value.trim()}`);
    }
    return `mailto:${company.email}?subject=${encodeURIComponent(
      `${form.heading} enquiry`,
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const el = event.currentTarget;
    const data = new FormData(el);

    // Honeypot: a real person never fills a field they cannot see.
    if (String(data.get("company-website") ?? "").trim()) return;

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = el.querySelector<HTMLElement>(
        `[name="${Object.keys(found)[0]}"]`,
      );
      first?.focus();
      return;
    }

    if (!ENDPOINT) {
      window.location.href = composeMailto(data);
      setStatus("sent");
      return;
    }

    setStatus("submitting");
    try {
      data.set("intent", intent);
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      el.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Intent selector */}
      <fieldset className="mb-10">
        <legend className="tech-label mb-5">What are you building?</legend>
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
                setStatus("idle");
                setErrors({});
              }}
              className={cx(
                "p-6 text-left transition-colors duration-200",
                intent === path.id
                  ? "bg-linen text-ink"
                  : "bg-canvas text-slate hover:bg-linen hover:text-ink",
              )}
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden
                  className={cx(
                    "h-2 w-2 shrink-0",
                    intent === path.id ? "bg-ochre" : "bg-[var(--rule-strong)]",
                  )}
                />
                <span className="display text-[1.25rem] leading-none">
                  {d.nav.contactPaths[path.id].label}
                </span>
              </span>
            </button>
          ))}
        </div>
        <p className="mt-5 max-w-[56ch] text-sm leading-relaxed text-slate">
          {form.blurb}
        </p>
      </fieldset>

      <form onSubmit={handleSubmit} noValidate className="space-y-7">
        {/* Honeypot, off-screen rather than display:none so bots still see it */}
        <div className="absolute left-[-9999px]" aria-hidden>
          <label htmlFor={`${uid}-hp`}>Leave this empty</label>
          <input
            id={`${uid}-hp`}
            name="company-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
          {form.fields.map((field) => (
            <FormField
              key={field.name}
              field={field}
              uid={uid}
              error={errors[field.name]}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="group inline-flex items-center gap-3 rounded-[3px] bg-ink px-7 py-4 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-ink/90 disabled:opacity-60"
          >
            {status === "submitting" ? "Sending" : form.submit}
            <span
              aria-hidden
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </button>

          {!ENDPOINT && (
            <p className="text-xs leading-relaxed text-slate-dim">
              Opens your email client with the enquiry prepared.
            </p>
          )}
        </div>

        <div role="status" aria-live="polite" className="min-h-[1.5rem]">
          {status === "sent" && (
            <p className="text-sm text-sage">
              {ENDPOINT
                ? "Thank you. We will come back to you."
                : `Your email client should have opened. If it did not, write to ${company.email}.`}
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-ochre">
              Something went wrong sending that. Please email {company.email}{" "}
              directly.
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

function FormField({
  field,
  uid,
  error,
}: {
  field: Field;
  uid: string;
  error?: string;
}) {
  const id = `${uid}-${field.name}`;
  const describedBy =
    [error ? `${id}-error` : null, field.help ? `${id}-help` : null]
      .filter(Boolean)
      .join(" ") || undefined;

  const base =
    "w-full rounded-[3px] border bg-linen px-4 py-3.5 text-ink transition-colors duration-200 placeholder:text-slate-dim focus:border-ochre";
  const border = error ? "border-ochre" : "border-[var(--rule-strong)]";

  if (field.type === "checkbox") {
    return (
      <div className={field.wide ? "sm:col-span-2" : undefined}>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            id={id}
            name={field.name}
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 accent-[var(--color-ochre)]"
            aria-describedby={describedBy}
          />
          <span className="text-sm text-ink">{field.label}</span>
        </label>
        {field.help && (
          <p id={`${id}-help`} className="mt-2 pl-8 text-xs text-slate-dim">
            {field.help}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={field.wide ? "sm:col-span-2" : undefined}>
      <label htmlFor={id} className="tech-label mb-3 block">
        {field.label}
        {field.required && (
          <span aria-hidden className="ml-1 text-ochre">
            *
          </span>
        )}
      </label>

      {field.type === "select" ? (
        <select
          id={id}
          name={field.name}
          defaultValue=""
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cx(base, border)}
        >
          <option value="">Select</option>
          {field.options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : field.type === "textarea" ? (
        <textarea
          id={id}
          name={field.name}
          rows={5}
          placeholder={field.placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cx(base, border)}
        />
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cx(base, border)}
        />
      )}

      {field.help && !error && (
        <p id={`${id}-help`} className="mt-2 text-xs text-slate-dim">
          {field.help}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-xs text-ochre">
          {error}
        </p>
      )}
    </div>
  );
}
