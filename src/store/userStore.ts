import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('useUserStore', () => {
  const isUserSignedIn = ref<boolean>(false)
  const isAuthLoading = ref<boolean>(true)
  const signedUser = ref<any>(null)

  function setIsUserSignedIn(value: boolean) {
    isUserSignedIn.value = value
  }

  function setIsAuthLoading(value: boolean) {
    isAuthLoading.value = value
  }

  function setSignedUser(user: any) {
    signedUser.value = user
  }
  

  return {
    isUserSignedIn,
    isAuthLoading,
    signedUser,
    setIsUserSignedIn,
    setIsAuthLoading,
    setSignedUser,
  }
})
