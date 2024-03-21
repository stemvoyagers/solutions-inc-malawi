import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import reactRefreach from '@vitejs/plugin-react-refreach';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react(),
    reactRefreach(),   
    autoprefixer(),
    tailwindcss('./tailwind.config.js'),
  ],
})
