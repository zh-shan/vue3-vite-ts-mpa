import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      theme: 'light',
      fullscreen: false
    }
  },
  actions: {
    setTheme(value: string): void {
      if (['light', 'dark'].includes(value)) {
        this.theme = value
      }
    },
    toggleFullscreen(): void {
      this.fullscreen = !this.fullscreen
    }
  },
  persist: true
})
