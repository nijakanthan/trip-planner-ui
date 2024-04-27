declare global {
  interface Window {
    config: {
      apiUrl: string
      balApiUrl: string
      externalApiUrl: string
    }
  }
}

export const apiUrl = window?.config?.apiUrl ? window.config.apiUrl : '/'
export const balApiUrl = window?.config?.balApiUrl ? window.config.balApiUrl : '/'
export const externalApiUrl = window?.config?.externalApiUrl ? window.config.externalApiUrl : '/'
