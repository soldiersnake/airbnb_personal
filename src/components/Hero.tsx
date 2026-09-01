import { useTranslation } from "react-i18next";
import { profile } from "../data/profile";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="wave-bg section-fade-in relative overflow-hidden px-4 pb-14 pt-12 text-center">
      <p className="font-heading text-sm font-semibold uppercase tracking-wide text-turquoise">
        {t("hero.eyebrow")}
      </p>
      <h1 className="mt-2 text-balance font-heading text-3xl font-bold text-ink sm:text-4xl">
        {profile.name}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-balance text-base text-ink/70">
        {t("hero.subtitle")}
      </p>
      <div className="mt-6 flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-sun/30 px-4 py-2 text-sm font-semibold text-terracotta-dark">
          {t("hero.scrollCta")}
          <span aria-hidden>↓</span>
        </span>
      </div>
    </section>
  );
}
