import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        blog: resolve(__dirname, 'blog.html'),
        "commercial-electrical-surrey": resolve(__dirname, 'commercial-electrical-surrey.html'),
        contact: resolve(__dirname, 'contact.html'),
        "electrician-burnaby": resolve(__dirname, 'electrician-burnaby.html'),
        "electrician-coquitlam": resolve(__dirname, 'electrician-coquitlam.html'),
        "electrician-delta": resolve(__dirname, 'electrician-delta.html'),
        "electrician-langley": resolve(__dirname, 'electrician-langley.html'),
        "electrician-maple-ridge": resolve(__dirname, 'electrician-maple-ridge.html'),
        "electrician-new-westminster": resolve(__dirname, 'electrician-new-westminster.html'),
        "electrician-pitt-meadows": resolve(__dirname, 'electrician-pitt-meadows.html'),
        "electrician-vancouver": resolve(__dirname, 'electrician-vancouver.html'),
        "electrician-white-rock": resolve(__dirname, 'electrician-white-rock.html'),
        "emergency-electrician-surrey": resolve(__dirname, 'emergency-electrician-surrey.html'),
        "ev-charger-installation-surrey": resolve(__dirname, 'ev-charger-installation-surrey.html'),
        "generator-installation-surrey": resolve(__dirname, 'generator-installation-surrey.html'),
        "panel-upgrade-surrey": resolve(__dirname, 'panel-upgrade-surrey.html'),
        pricing: resolve(__dirname, 'pricing.html'),
        projects: resolve(__dirname, 'projects.html'),
        "residential-rewiring-surrey": resolve(__dirname, 'residential-rewiring-surrey.html'),
      },
    },
  },
})
