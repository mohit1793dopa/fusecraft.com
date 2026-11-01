"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/motion/Reveal";
import { TopFadeGrid } from "@/components/ui/top-fade-grid";
import { brand } from "@/data/site";

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const role = String(formData.get("role") || "").trim();
    const type = String(formData.get("type") || "").trim();
    const message = String(formData.get("message") || "").trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, role, type, message }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setSubmittedName(name);
        setSent(true);
      } else {
        throw new Error(data.error || "Unable to send inquiry right now.");
      }
    } catch (err: unknown) {
      console.error("Form submission failed:", err);
      // Fallback: If network / server fails, allow user to open email client
      setErrorMessage(
        "Could not send automatically. Click below to open in your email client or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative overflow-hidden bg-sand px-5 pb-24 pt-32 md:px-8 md:pt-40">
      <TopFadeGrid />
      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <Reveal>
          <p className="eyebrow text-mocha">Contact</p>
          <h1 className="type-display mt-3 text-4xl md:text-6xl">
            Let&apos;s resolve the detail together.
          </h1>
          <p className="type-body mt-6 max-w-md text-base md:text-lg">
            Share a brief, drawings, or a room that needs a piece that truly
            belongs. We typically reply within a few business days.
          </p>
          <div className="mt-10 space-y-5 text-sm">
            <p>
              <span className="eyebrow block text-mocha/60">Studio</span>
              <a
                href={brand.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-baseline gap-1 type-body text-ink underline decoration-line underline-offset-4 transition-colors hover:text-chestnut"
              >
                <span>{brand.location}</span>
                <span aria-hidden className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </p>
            <p>
              <span className="eyebrow block text-mocha/60">Email</span>
              <a
                href={`mailto:${brand.email}`}
                className="font-normal text-ink underline decoration-line underline-offset-4 transition-colors hover:text-chestnut"
              >
                {brand.email}
              </a>
            </p>
            <p>
              <span className="eyebrow block text-mocha/60">Phone</span>
              <a
                href={`tel:${brand.phone.replace(/\s+/g, "")}`}
                className="font-normal text-ink underline decoration-line underline-offset-4 transition-colors hover:text-chestnut"
              >
                {brand.phone}
              </a>
            </p>
            <p>
              <span className="eyebrow block text-mocha/60">LinkedIn</span>
              <a
                href={brand.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-normal text-ink underline decoration-line underline-offset-4 transition-colors hover:text-chestnut"
              >
                Fusecrafts Pvt Ltd ↗
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="sent"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-[24px] border border-line/60 bg-cream px-6 py-12 md:rounded-[28px] md:px-10 shadow-xs"
              >
                <p className="font-display text-2xl text-moss">Inquiry sent to our studio.</p>
                <p className="mt-3 text-mocha">
                  Thank you{submittedName ? `, ${submittedName}` : ""}. Your project details have
                  been sent to{" "}
                  <strong className="font-medium text-ink">{brand.email}</strong>.
                  Our team typically reviews drawings and responds within 1–2 business days.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setSubmittedName("");
                    }}
                    className="text-xs uppercase tracking-wider text-mocha underline decoration-line underline-offset-4 hover:text-ink transition-colors"
                  >
                    ← Send another note
                  </button>
                  <a
                    href={`tel:${brand.phone.replace(/\s+/g, "")}`}
                    className="text-xs uppercase tracking-wider text-mocha underline decoration-line underline-offset-4 hover:text-ink transition-colors"
                  >
                    Call {brand.phone} ↗
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-[24px] border border-line/60 bg-cream px-6 py-10 md:rounded-[28px] md:px-10 md:py-12 shadow-xs"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="eyebrow text-mocha" htmlFor="role">
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="mt-2 w-full border-b border-line bg-transparent py-3 text-moss outline-none transition-colors focus:border-chestnut"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      <option value="architect">Architect</option>
                      <option value="designer">Interior designer</option>
                      <option value="client">Client</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <Field
                    label="Project type"
                    name="type"
                    placeholder="Facade, lighting, furniture…"
                  />
                </div>
                <div className="mt-6">
                  <label className="eyebrow text-mocha" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full border-b border-line bg-transparent py-3 text-moss outline-none transition-colors placeholder:text-mocha/40 focus:border-chestnut"
                    placeholder="Tell us about the space and the detail…"
                  />
                </div>

                {errorMessage && (
                  <div className="mt-6 rounded border border-chestnut/30 bg-chestnut/10 p-4 text-xs text-chestnut">
                    <p>{errorMessage}</p>
                    <a
                      href={`mailto:${brand.email}?subject=Project%20Inquiry%20via%20Fusecrafts`}
                      className="mt-2 inline-block font-medium underline underline-offset-2 hover:text-ink"
                    >
                      Open in Mail app ({brand.email}) →
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary mt-10 transition-opacity disabled:opacity-50"
                >
                  {isSubmitting ? "Sending inquiry…" : "Send message →"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="eyebrow text-mocha" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full border-b border-line bg-transparent py-3 text-moss outline-none transition-colors placeholder:text-mocha/40 focus:border-chestnut"
      />
    </div>
  );
}
