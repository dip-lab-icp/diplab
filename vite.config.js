import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

function githubPagesSpa() {
  return {
    name: 'github-pages-spa',
    closeBundle() {
      const dist = resolve(process.cwd(), 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
      writeFileSync(resolve(dist, '.nojekyll'), '')
    },
  }
}

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/diplab/' : '/',
  plugins: [react(), githubPagesSpa()],
})
