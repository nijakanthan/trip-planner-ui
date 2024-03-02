<template>
  <div class="loading-content"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { ElLoading } from 'element-plus'
import { useCookies } from 'vue3-cookies'
import { useUserStore } from '@/store/userStore'

const { setIsUserSignedIn, setSignedUser } = useUserStore()

const { cookies } = useCookies()

onMounted((): void => {
  const loadingInstance = ElLoading.service({
    lock: true,
    text: 'Loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  if (cookies.get('userinfo')) {
    const userInfo = cookies.get('userinfo')
    sessionStorage.setItem('userinfo', userInfo)
    cookies.remove('userinfo')
    const userInfoObject = JSON.parse(atob(userInfo))
    setIsUserSignedIn(true)
    setSignedUser(userInfoObject)
    loadingInstance.close
    window.location.href = '/home'
  } else if (sessionStorage.getItem('userinfo')) {
    const sessionValue = sessionStorage.getItem('userinfo')
    const userInfoObject = JSON.parse(atob(sessionValue!))
    setIsUserSignedIn(true)
    setSignedUser(userInfoObject)
    window.location.href = '/home'
  } else {
    window.location.href = '/auth/login'
  }
})

</script>