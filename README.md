# Airbnb Guest Guide — Frontend

SPA mobile-first en **React + TypeScript + Vite + Tailwind CSS v4** con la guía de huéspedes de las habitaciones en alquiler en Valencia. Contenido en inglés, español y ruso vía `react-i18next` (inglés por defecto en la primera visita).

Secciones: Hero, Cómo llegar (con botón a Google Maps), WiFi (con QR de conexión automática), Normas de la casa, Publicaciones (galería de fotos con link a Airbnb), Atractivos turísticos + transporte (Valenbici/Yego), Recomendaciones (formulario privado conectado al backend) y Footer (con QR del sitio).

## Cómo levantar el proyecto

```bash
npm install
cp .env.example .env    # completar según corresponda (ver variables abajo)
npm run dev              # http://localhost:5174
```

Otros comandos útiles:

```bash
npm run build     # build de producción en dist/
npm run preview   # sirve el build de producción localmente
```

## Variables de entorno

Definidas en `.env` (a partir de `.env.example`):

| Variable | Descripción | Ejemplo |
|---|---|---|
| `VITE_API_URL` | URL base del backend compartido con el portfolio (sin `/` al final). El formulario de recomendaciones hace `POST` a `${VITE_API_URL}/recommendations`. | `http://localhost:3000` |
| `VITE_SITE_URL` | URL pública final del sitio, usada para generar el QR "escaneá para abrir esta guía" del footer. | `https://airbnb.marianomaciasgandulfo.com |

## Estructura de contenid`o

Todo el contenido vive en `src/data/*.ts` (perfil/dirección/WiFi, publicaciones, orden de atractivos turísticos) y los textos de la interfaz en `src/i18n/locales/{en,es,ru}.json`. El texto de cada atractivo turístico (título, dirección, info para viajar, descripción) también vive en esos JSON, bajo `attractions.items.<id>`, para que cada idioma tenga su propia versión sin tocar componentes.

Más detalle general del proyecto (relación con el backend compartido, decisiones de diseño, pendientes de contenido y guía de despliegue) en el `README.md` de la carpeta raíz `airbnb-app/`.
