import type { Attraction } from "../types/content";

// El texto (título, dirección, info para viajar, descripción) vive en los
// archivos de i18n bajo `attractions.items.<i18nKey>` para que cada idioma
// tenga su propia versión. Este archivo solo define el orden y qué tarjetas
// son de transporte (Valenbici/Yego/EMT) vs. atractivos turísticos.
export const attractions: Attraction[] = [
  { id: "city-of-arts-and-sciences", i18nKey: "cityOfArtsAndSciences" },
  { id: "central-market", i18nKey: "centralMarket" },
  { id: "el-carmen", i18nKey: "elCarmen" },
  { id: "malvarrossa-beach", i18nKey: "malvarrossaBeach" },
  { id: "lonja-de-la-seda", i18nKey: "lonjaDeLaSeda" },
  { id: "turia-gardens", i18nKey: "turiaGardens" },
  { id: "termas-de-mura", i18nKey: "termasDeMura" },
  { id: "port-saplaya", i18nKey: "portSaplaya" },
  { id: "san-nicolas", i18nKey: "sanNicolas" },
  { id: "atenea-sky", i18nKey: "ateneaSky" },
  { id: "sky-bar-novotel", i18nKey: "skyBarNovotel" },
  { id: "bombas-gens", i18nKey: "bombasGens" },
  { id: "ivam", i18nKey: "ivam" },
  { id: "mirador-albufera", i18nKey: "miradorAlbufera" },
  { id: "valenbici", i18nKey: "valenbici", isTransport: true },
  { id: "yego", i18nKey: "yego", isTransport: true },
  { id: "emt", i18nKey: "emt", isTransport: true },
];
