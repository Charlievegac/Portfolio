import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages is served under /Portfolio/; local dev uses site root.
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/Portfolio/' : '/'
}));
