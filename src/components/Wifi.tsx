import { useTranslation } from "react-i18next";
import { FaWifi } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";
import { profile } from "../data/profile";
import Section from "./Section";

// Escapa caracteres especiales según el estándar de QR para WiFi
// (WIFI:T:WPA;S:<ssid>;P:<password>;;)
function escapeWifiField(value: string) {
  return value.replace(/([\\;,":])/g, "\\$1");
}

export default function Wifi() {
  const { t } = useTranslation();
  const wifiQrValue = `WIFI:T:WPA;S:${escapeWifiField(profile.wifi.ssid)};P:${escapeWifiField(
    profile.wifi.password,
  )};;`;

  return (
    <Section
      id="wifi"
      title={t("wifi.title")}
      intro={t("wifi.intro")}
      icon={<FaWifi aria-hidden />}
      tone="sand"
    >
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-ink/10 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="w-full space-y-3 text-center sm:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-turquoise">
              {t("wifi.networkLabel")}
            </p>
            <p className="font-heading text-lg font-bold text-ink">{profile.wifi.ssid}</p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-turquoise">
              {t("wifi.passwordLabel")}
            </p>
            <p className="font-mono text-lg font-bold text-ink">{profile.wifi.password}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="rounded-2xl border-4 border-sun bg-white p-2">
            <QRCodeSVG value={wifiQrValue} size={140} />
          </div>
          <p className="max-w-[160px] text-center text-xs text-ink/60">{t("wifi.scanHint")}</p>
        </div>
      </div>
    </Section>
  );
}
