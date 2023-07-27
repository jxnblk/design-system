import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import checker from 'vite-plugin-checker'
import { defineConfig } from 'vitest/config'
import * as packageJson from './package.json'

import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts(),

    !process.env.VITEST
      ? checker({
          typescript: true,
          eslint: {
            lintCommand: 'eslint .',
          },
        })
      : undefined,
  ],

  optimizeDeps: {
    include: ['pcln-icons'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'pcln-slider',
      fileName: 'pcln-slider',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        exports: 'named',
      },
    },
    sourcemap: true,
    commonjsOptions: {
      include: [/pcln-icons/, /node_modules/],
    },
  },

  test: {
    coverage: {
      provider: 'v8',
      exclude: ['**/__test__/**'],
    },
    css: false,
    environment: 'jsdom',
    globals: false,
  },
})
