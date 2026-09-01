import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Se sirve en su propio subdominio: airbnb.marianomaciasgandulfo.com
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5174,
  },
})
