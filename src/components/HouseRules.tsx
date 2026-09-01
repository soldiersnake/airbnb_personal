import { useTranslation } from "react-i18next";
import {
  FaClipboardList,
  FaClock,
  FaDoorOpen,
  FaUsers,
  FaPaw,
  FaGlassCheers,
  FaSmokingBan,
  FaMoon,
  FaFileContract,
  FaTshirt,
  FaBath,
} from "react-icons/fa";
import Section from "./Section";

const RULE_ICONS = {
  checkIn: FaDoorOpen,
  checkOut: FaClock,
  maxGuests: FaUsers,
  pets: FaPaw,
  events: FaGlassCheers,
  smoking: FaSmokingBan,
  quietHours: FaMoon,
  cancellation: FaFileContract,
} as const;

export default function HouseRules() {
  const { t } = useTranslation();
  const ruleKeys = Object.keys(RULE_ICONS) as (keyof typeof RULE_ICONS)[];

  return (
    <Section
      id="house-rules"
      title={t("houseRules.title")}
      intro={t("houseRules.intro")}
      icon={<FaClipboardList aria-hidden />}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        {ruleKeys.map((key) => {
          const Icon = RULE_ICONS[key];
          return (
            <div
              key={key}
              className="flex items-start gap-3 rounded-2xl border border-ink/10 bg-sand-50 p-4"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                <Icon aria-hidden />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
                  {t(`houseRules.${key}.label`)}
                </p>
                <p className="mt-0.5 text-sm font-medium text-ink">{t(`houseRules.${key}.value`)}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-5 space-y-3">
        <p className="rounded-2xl border border-ink/10 bg-white p-4 text-sm text-ink/70">
          {t("houseRules.kitchenNote")}
        </p>
        <p className="rounded-2xl border border-ink/10 bg-white p-4 text-sm text-ink/70">
          {t("houseRules.laundryNote")}
        </p>
        <p className="flex items-start gap-2 rounded-2xl border border-ink/10 bg-white p-4 text-sm text-ink/70">
          <FaTshirt className="mt-0.5 shrink-0 text-turquoise" aria-hidden />
          {t("houseRules.dryingNote")}
        </p>
        <p className="flex items-start gap-2 rounded-2xl border border-ink/10 bg-white p-4 text-sm text-ink/70">
          <FaBath className="mt-0.5 shrink-0 text-turquoise" aria-hidden />
          {t("houseRules.bathroomNote")}
        </p>
        <p className="rounded-2xl border border-sun/50 bg-sun/10 p-4 text-sm text-ink/80">
          🐶 {t("houseRules.petNote")}
        </p>
      </div>
    </Section>
  );
}
