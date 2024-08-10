import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dotenv from 'dotenv'


dotenv.config({ path: '../.env' });

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
