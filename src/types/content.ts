export interface Host {
  name: string;
  /** Phone number as displayed to guests, e.g. "+34 111 111 111" */
  phone: string;
}

export interface PropertyProfile {
  name: string;
  address: {
    line: string;
    city: string;
    postalCode: string;
    country: string;
    /** Full address string ready for a Google Maps directions link */
    mapsQuery: string;
  };
  wifi: {
    ssid: string;
    password: string;
  };
  /** Hosts guests can reach directly (shown next to the arrival directions) */
  hosts: Host[];
}

export interface Listing {
  id: string;
  name: string;
  /** Public Airbnb URL guests can click through to */
  airbnbUrl: string;
  /** Placeholder or real photo URLs; replace with real photos when available */
  photos: string[];
}

export interface Attraction {
  id: string;
  /**
   * Base i18n key under `attractions.items.<i18nKey>`, which must have
   * `title`, `address`, `travelInfo`, `description` and optionally `url`.
   */
  i18nKey: string;
  /** Marks Valenbici/Yego-style transport recommendations vs. sightseeing spots */
  isTransport?: boolean;
}
