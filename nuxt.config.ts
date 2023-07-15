// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    sourcemap: {
        server: true,
        client: true
    },
    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@element-plus/nuxt',
        '@nuxt/devtools'
    ],
    css: [
        '@unocss/reset/tailwind-compat.css'
    ],
    alias: {
        'lodash': 'lodash-es'
    },
    elementPlus: { /** Options */ },
    devtools: {
        // Enable devtools (default: true)
        enabled: true,
        // VS Code Server options
        vscode: {}
        // ...other options
    },
    runtimeConfig: {
        public: {
            appName: '' // 可被.env中NUXT_PUBLIC_APP_NAME覆盖
        }
    }
} as Record<string, unknown>)
