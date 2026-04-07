// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { defineNuxtConfig } from 'nuxt/config'

import { theme } from './app/theme/aura'

import packageJson from './package.json'

const kDevServerPort = 3000
const kDevApiHost = 'http://localhost:3001'
const kProdApiHost = 'https://your-api.com'

export default defineNuxtConfig({
  compatibilityDate: '2025-04-02',
  app: {
    head: {
      title: 'Your App Name',
      htmlAttrs: {
        lang: 'en',
      },
      link: [],
    },
  },
  dir: {
    app: 'app',
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/tailwind.css', 'primeicons/primeicons.css'],
  devtools: {
    enabled: true,
  },
  devServer: {
    port: kDevServerPort,
    host: 'localhost',
  },
  experimental: {
    granularCachedData: false,
    defaults: {
      useAsyncData: {
        // Use shallowRef when fetching data with useAsyncData/useFetch
        deep: false,
      },
    },
  },
  hooks: {
    'prerender:routes'({ routes }: { routes: Set<string> }) {
      routes.clear() // Do not generate any routes (except the defaults)
    },
  },
  imports: {
    scan: false,
  },
  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@primevue/nuxt-module',
    '@vueuse/nuxt',
    'pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig: {
    // Private keys (server-only)
    // Add your private runtime config here

    // Public keys
    public: {
      appVersion: packageJson.version,
    },
  },
  $development: {
    runtimeConfig: {
      public: {
        apiHost: kDevApiHost,
      },
    },
  },
  $production: {
    vite: {
      esbuild: {
        drop: ['console', 'debugger'],
      },
    },
    runtimeConfig: {
      public: {
        apiHost: kProdApiHost,
      },
    },
  },
  ssr: false,
  vite: {
    plugins: [tailwindcss()],
  },

  // Module configs
  icon: {
    mode: 'svg',
    clientBundle: {
      // Scan all components in the project and include icons
      scan: true,

      // Guard for uncompressed bundle size, will fail the build if exceeds
      sizeLimitKb: 256,
    },
  },
  primevue: {
    autoImport: true,
    components: {
      prefix: 'Prime',
    },
    directives: {
      prefix: 'prime',
    },
    options: {
      theme,
      pt: {
        select: {
          panel: { class: 'bg-white' },
          list: { class: 'bg-white' },
        },
      },
    },
  },
})
