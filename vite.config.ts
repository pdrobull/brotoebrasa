import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/brotoebrasa/',
  plugins: [react()],
  server: {
    allowedHosts: ['.monkeycode-ai.live'],
  },
  preview: {
    allowedHosts: ['.monkeycode-ai.live'],
  },
})
