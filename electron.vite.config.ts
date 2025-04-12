import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    // assetsInclude: ['src/renderer/src/assets/**'],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    // assetsInclude: ['src/renderer/src/assets/**'],
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    base: './',
    plugins: [react()],
    assetsInclude: ['src/renderer/src/assets/images/**/.png', 'src/renderer/src/assets/images/**/.svg'],
    build: {
      rollupOptions: {
        preserveEntrySignatures: 'strict',
      }
    }
  }
})
