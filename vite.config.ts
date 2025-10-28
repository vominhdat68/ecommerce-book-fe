import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    //config path golbal
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/', // hoặc '/your-repo-name/' nếu deploy GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: false // Tắt sourcemap để build nhẹ hơn
  }
})
