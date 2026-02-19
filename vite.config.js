import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: './',
    plugins: [react()],
    publicDir: 'public',
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                entryFileNames: `assets/[name].js`,
                chunkFileNames: `assets/[name].js`,
                assetFileNames: `assets/[name].[ext]`,
            },
        },
    },
    server: {
        port: 3000,
        open: true,
    },
});
