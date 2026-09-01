import type { Listing } from "../types/content";

// Fotos reales provistas por Mariano, ubicadas en public/habitacion1 y public/habitacion2.
// Las rutas son relativas al `base` de Vite (ver Listings.tsx, que antepone BASE_URL).
export const listings: Listing[] = [
  {
    id: "room-1",
    name: "Habitación a metros Río Turia",
    airbnbUrl: "https://www.airbnb.mx/rooms/1420176470244666641",
    photos: [
      "habitacion1/Screenshot_20250513_130239_fotocasa.jpg",
      "habitacion1/Screenshot_20250513_130244_fotocasa.jpg",
      "habitacion1/Screenshot_20250513_130249_fotocasa.jpg",
      "habitacion1/Screenshot_20250513_130253_fotocasa.jpg",
    ],
  },
  {
    id: "room-2",
    name: "Habitación a metros del parque Turia",
    airbnbUrl: "https://www.airbnb.mx/rooms/1746287886324772139",
    photos: [
      "habitacion2/20260310_151654.jpg",
      "habitacion2/20260310_151709.jpg",
      "habitacion2/20260310_151753.jpg",
      "habitacion2/20260313_134913.jpg",
      "habitacion2/20260313_134924.jpg",
    ],
  },
];
