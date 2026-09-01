import { useTranslation } from "react-i18next";
import { QRCodeSVG } from "qrcode.react";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://www.marianomaciasgandulfo.com/airbnb";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="section-fade-in bg-ink px-4 py-10 text-center text-sand-100">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
        <div className="rounded-2xl bg-white p-3">
          <QRCodeSVG value={SITE_URL} size={120} />
        </div>
        <p className="max-w-[220px] text-sm text-sand-100/80">{t("footer.scanQr")}</p>
        <p className="font-heading font-semibold text-sun">{t("footer.enjoyStay")}</p>
        <p className="text-xs text-sand-100/50">
          © {year} · {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
