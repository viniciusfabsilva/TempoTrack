/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_OPEN_WHEATER_API_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
  