import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "ru", label: "RU" },
] as const;

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.slice(0, 2) || "en";

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-ink/10 bg-white/80 p-1 shadow-sm backdrop-blur"
      role="group"
      aria-label={t("language.label")}
    >
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          className={`rounded-full px-3 py-1 text-sm font-heading font-semibold transition ${
            current === code
              ? "bg-terracotta text-white shadow"
              : "text-ink/60 hover:text-ink"
          }`}
          aria-pressed={current === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
