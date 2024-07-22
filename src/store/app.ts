import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const showPrivacy = ref(false)
  const resolvePrivacyAuthorization = ref<any>(null)
  return {
    showPrivacy,
    resolvePrivacyAuthorization,
  }
})
