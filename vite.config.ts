import { defineConfig } from 'vite'
import pluginKnockout from './vite-plugin-knockout'

export default defineConfig({
  plugins: [
    pluginKnockout()
  ]
})