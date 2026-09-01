import { useTranslation } from "react-i18next";
import { FaBus, FaMapMarkedAlt, FaPlaneDeparture, FaTrain, FaWhatsapp } from "react-icons/fa";
import { profile } from "../data/profile";
import Section from "./Section";

// Enlaces de Google Maps compartidos por Mariano para cada punto de llegada.
const AIRPORT_MAPS_URL = "https://maps.app.goo.gl/7MPgMvQTbYuZAbbA8";
const TRAIN_STATION_MAPS_URL = "https://maps.app.goo.gl/bY83g9Uphjx2rQ9RA";
const BUS_STATION_MAPS_URL = "https://maps.app.goo.gl/W8k5Ld4SouFx4AfY8";

export default function HowToGetThere() {
  const { t } = useTranslation();
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    profile.address.mapsQuery,
  )}`;

  return (
    <Section
      id="how-to-get-there"
      title={t("howToGetThere.title")}
      intro={t("howToGetThere.intro")}
      icon={<FaMapMarkedAlt aria-hidden />}
    >
      <div className="rounded-2xl border border-ink/10 bg-sand-50 p-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-terracotta">
          {t("howToGetThere.addressLabel")}
        </p>
        <p className="mt-1 text-ink">
          {profile.address.line}, {profile.address.city} ({profile.address.postalCode}),{" "}
          {profile.address.country}
        </p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-terracotta-dark"
        >
          <FaMapMarkedAlt aria-hidden />
          {t("howToGetThere.mapButton")}
        </a>

        <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-terracotta">
          {t("howToGetThere.contactsTitle")}
        </p>
        <div className="mt-2 flex flex-wrap gap-3">
          {profile.hosts.map((host) => {
            const waNumber = host.phone.replace(/\D/g, "");
            return (
              <a
                key={host.name}
                href={`https://wa.me/${waNumber}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-turquoise/40 bg-white px-4 py-2 text-sm font-semibold text-turquoise-dark shadow-sm transition hover:bg-turquoise hover:text-white"
              >
                <FaWhatsapp aria-hidden />
                {host.name}: {host.phone}
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <a
          href={AIRPORT_MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-ink/10 p-4 transition hover:border-turquoise/40"
        >
          <p className="flex items-center gap-2 font-heading font-semibold text-ink">
            <FaPlaneDeparture className="text-turquoise" aria-hidden />
            {t("howToGetThere.fromAirport.title")}
          </p>
          <p className="mt-2 text-sm text-ink/70">{t("howToGetThere.fromAirport.text")}</p>
        </a>
        <a
          href={TRAIN_STATION_MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-ink/10 p-4 transition hover:border-turquoise/40"
        >
          <p className="flex items-center gap-2 font-heading font-semibold text-ink">
            <FaTrain className="text-turquoise" aria-hidden />
            {t("howToGetThere.fromTrainStation.title")}
          </p>
          <p className="mt-2 text-sm text-ink/70">{t("howToGetThere.fromTrainStation.text")}</p>
        </a>
        <a
          href={BUS_STATION_MAPS_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl border border-ink/10 p-4 transition hover:border-turquoise/40"
        >
          <p className="flex items-center gap-2 font-heading font-semibold text-ink">
            <FaBus className="text-turquoise" aria-hidden />
            {t("howToGetThere.fromBusStation.title")}
          </p>
          <p className="mt-2 text-sm text-ink/70">{t("howToGetThere.fromBusStation.text")}</p>
        </a>
      </div>
    </Section>
  );
}
