import { useTranslation } from "react-i18next";
import { FaHouseChimney, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { listings } from "../data/listings";
import Section from "./Section";

export default function Listings() {
  const { t } = useTranslation();

  return (
    <Section
      id="listings"
      title={t("listings.title")}
      intro={t("listings.intro")}
      icon={<FaHouseChimney aria-hidden />}
      tone="sand"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {listings.map((listing) => (
          <a
            key={listing.id}
            href={listing.airbnbUrl}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="grid grid-cols-3 gap-0.5">
              {listing.photos.slice(0, 3).map((photo, index) => (
                <img
                  key={index}
                  src={`${import.meta.env.BASE_URL}${photo}`}
                  alt={listing.name}
                  loading="lazy"
                  className="h-24 w-full object-cover sm:h-28"
                />
              ))}
            </div>
            <div className="flex items-center justify-between gap-2 p-4">
              <span className="font-heading font-semibold text-ink">{listing.name}</span>
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-terracotta/10 px-3 py-1.5 text-sm font-semibold text-terracotta-dark transition group-hover:bg-terracotta group-hover:text-white">
                {t("listings.viewOnAirbnb")}
                <FaArrowUpRightFromSquare aria-hidden className="text-xs" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
