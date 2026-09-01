import type { IconType } from "react-icons";
import { useTranslation } from "react-i18next";
import { FaUmbrellaBeach, FaBicycle, FaLocationDot } from "react-icons/fa6";
import {
  FaLandmark,
  FaWater,
  FaChurch,
  FaCocktail,
  FaSwimmingPool,
  FaPalette,
  FaImage,
  FaBinoculars,
} from "react-icons/fa";
import { attractions } from "../data/attractions";
import Section from "./Section";

// Pequeño ícono distintivo para los sitios de interés agregados por Mariano,
// a modo de "imagen" ligera mientras no haya fotos propias de cada lugar.
const EXTRA_ICONS: Record<string, IconType> = {
  termasDeMura: FaLandmark,
  portSaplaya: FaWater,
  sanNicolas: FaChurch,
  ateneaSky: FaCocktail,
  skyBarNovotel: FaSwimmingPool,
  bombasGens: FaPalette,
  ivam: FaImage,
  miradorAlbufera: FaBinoculars,
};

export default function Attractions() {
  const { t } = useTranslation();
  const sightseeing = attractions.filter((a) => !a.isTransport);
  const transport = attractions.filter((a) => a.isTransport);

  return (
    <Section
      id="attractions"
      title={t("attractions.title")}
      intro={t("attractions.intro")}
      icon={<FaUmbrellaBeach aria-hidden />}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {sightseeing.map((item) => (
          <AttractionCard key={item.id} i18nKey={item.i18nKey} />
        ))}
      </div>

      <h3 className="mt-8 mb-4 flex items-center gap-2 font-heading text-lg font-bold text-ink">
        <FaBicycle className="text-turquoise" aria-hidden />
        {t("attractions.sectionTransport")}
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {transport.map((item) => (
          <AttractionCard key={item.id} i18nKey={item.i18nKey} accent />
        ))}
      </div>
    </Section>
  );
}

function AttractionCard({ i18nKey, accent = false }: { i18nKey: string; accent?: boolean }) {
  const { t } = useTranslation();
  const base = `attractions.items.${i18nKey}`;
  const url = t(`${base}.url`, { defaultValue: "" });
  const Icon = EXTRA_ICONS[i18nKey];

  const content = (
    <div
      className={`h-full rounded-2xl border p-4 transition ${
        accent
          ? "border-sun/60 bg-sun/10 hover:border-sun"
          : "border-ink/10 bg-white hover:border-turquoise/40"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="font-heading font-semibold text-ink">{t(`${base}.title`)}</p>
        {Icon && (
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-turquoise/10 text-turquoise">
            <Icon aria-hidden />
          </span>
        )}
      </div>
      <p className="mt-1 flex items-start gap-1 text-xs text-ink/60">
        <FaLocationDot className="mt-0.5 shrink-0" aria-hidden />
        {t(`${base}.address`)}
      </p>
      <p className="mt-2 text-xs font-semibold text-turquoise-dark">
        {t("attractions.travelInfoLabel")}: {t(`${base}.travelInfo`)}
      </p>
      <p className="mt-2 text-sm text-ink/70">{t(`${base}.description`)}</p>
    </div>
  );

  if (url) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}
