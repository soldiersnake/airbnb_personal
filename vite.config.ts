import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Se sirve bajo www.marianomaciasgandulfo.com/airbnb (rewrite en Vercel).
  // Si en algún momento pasa a un subdominio propio, cambiar a "/".
  base: '/airbnb/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
  },
})
