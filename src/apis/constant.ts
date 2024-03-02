declare global {
  interface Window {
    config: {
      apiUrl: string
    }
  }
}

export const apiUrl = window?.config?.apiUrl ? window.config.apiUrl : '/'
