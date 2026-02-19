import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/inet_r/',
    plugins: [react()],
    publicDir: 'public',
    build: {
        outDir: 'dist',
    },
    server: {
        port: 3000,
        open: true,
    },
});
