import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV !== 'test',
    }),
  ],
  resolve: {
    alias: [
      {
        find: '/images',
        replacement: path.resolve(__dirname, '/server/public/images'),
      },
      {
        find: '/files',
        replacement: path.resolve(__dirname, '/server/public/files'),
      },
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
})
