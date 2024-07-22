import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const showPrivacy = ref(false)
  const resolvePrivacyAuthorization = ref<any>(null)
  const appName = ref('monousoooo')
  return {
    showPrivacy,
    resolvePrivacyAuthorization,
    appName,
  }
})
