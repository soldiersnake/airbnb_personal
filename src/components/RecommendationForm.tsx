import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { FaCommentDots } from "react-icons/fa";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { sendRecommendation } from "../lib/api";
import Section from "./Section";

interface FormState {
  name: string;
  email: string;
  message: string;
  company: string; // honeypot
}

const initialState: FormState = { name: "", email: "", message: "", company: "" };

type Status = "idle" | "submitting" | "success" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function RecommendationForm() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = t("recommendations.nameLabel");
    if (!emailPattern.test(form.email.trim())) next.email = t("recommendations.emailLabel");
    if (!form.message.trim() || form.message.trim().length < 5) {
      next.message = t("recommendations.messageLabel");
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (form.company) return; // honeypot triggered, silently drop
    if (!validate()) return;

    setStatus("submitting");
    try {
      await sendRecommendation(form);
      setStatus("success");
      setForm(initialState);
      setErrors({});
    } catch {
      setStatus("error");
    }
  }

  return (
    <Section
      id="recommendations"
      title={t("recommendations.title")}
      intro={t("recommendations.intro")}
      icon={<FaCommentDots aria-hidden />}
      tone="sand"
    >
      {status === "success" ? (
        <div className="mx-auto max-w-md rounded-2xl border border-turquoise/30 bg-turquoise/5 p-6 text-center">
          <FaCircleCheck className="mx-auto mb-3 text-3xl text-turquoise" aria-hidden />
          <p className="font-heading font-semibold text-ink">{t("recommendations.success")}</p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 rounded-full border border-ink/15 px-4 py-2 text-sm font-semibold text-ink transition hover:border-turquoise/50 hover:text-turquoise-dark"
          >
            {t("recommendations.submit")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 rounded-2xl border border-ink/10 bg-white p-5">
          {/* Honeypot field — hidden from real users, bots often fill it in */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => updateField("company", e.target.value)}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t("recommendations.nameLabel")} error={errors.name}>
              <input
                type="text"
                placeholder={t("recommendations.namePlaceholder")}
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                className={inputClass(Boolean(errors.name))}
              />
            </Field>
            <Field label={t("recommendations.emailLabel")} error={errors.email}>
              <input
                type="email"
                placeholder={t("recommendations.emailPlaceholder")}
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                className={inputClass(Boolean(errors.email))}
              />
            </Field>
          </div>

          <Field label={t("recommendations.messageLabel")} error={errors.message}>
            <textarea
              rows={4}
              placeholder={t("recommendations.messagePlaceholder")}
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className={inputClass(Boolean(errors.message))}
            />
          </Field>

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-600">
              <FaCircleXmark className="mt-0.5 shrink-0" aria-hidden />
              <p>{t("recommendations.error")}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full rounded-full bg-turquoise px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-turquoise-dark disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? t("recommendations.sending") : t("recommendations.submit")}
          </button>
        </form>
      )}
    </Section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-ink/70">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-500">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-sand-50 px-4 py-2.5 text-sm text-ink outline-none transition focus:border-turquoise ${
    hasError ? "border-red-400" : "border-ink/15"
  }`;
}
