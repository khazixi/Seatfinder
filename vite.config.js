import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    VitePWA({
      strategies: 'generateSW',
      injectRegister: 'auto',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Seatfinder',
        short_name: 'Seatfinder',
        description: "Seatfinder is the best app for seding your location in one of UMass' dining halls to your friends ",
        theme_color: '#ffffff',
        icons: [
          {
            src: 'icon192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon512',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icon192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'icon512',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ]
})
