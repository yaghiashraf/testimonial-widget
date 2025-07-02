/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string
  // Add other Vite environment variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}