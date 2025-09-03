import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',   // directory di output
  },
  server: {
    port: 5173,       // porta locale
    open: true        // apre il browser automaticamente
  }
})
