<template>
  <div class="wrapper">
    <div class="navigation">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Logo">
      </div>
      <div class="nav-item">
        <router-link to="/home" class="nav-link" router-link-active>Home</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/about" class="nav-link" router-link-active>About</router-link>
      </div>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useCookies } from 'vue3-cookies'
import { useUserStore } from '@/store/userStore'

const { cookies } = useCookies()
const {
  setIsUserSignedIn,
  setSignedUser
} = useUserStore()


onBeforeMount((): void => {
  if (cookies.get('userinfo')) {
    const userInfo = cookies.get('userinfo')
    sessionStorage.setItem('userinfo', userInfo)
    cookies.remove('userinfo')
    const userInfoObject = JSON.parse(atob(userInfo))
    setIsUserSignedIn(true)
    setSignedUser(userInfoObject)
  } else if (sessionStorage.getItem('userinfo')) {
    const sessionValue = sessionStorage.getItem('userinfo')
    const userInfoObject = JSON.parse(atob(sessionValue!))
    setIsUserSignedIn(true)
    setSignedUser(userInfoObject)
  } else {
    console.log('User is not signed in')
    window.location.href = '/auth/login'
  }
})

</script>

<style lang="scss">
div.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  div.logo {
    display: flex;
    img {
      height: 50px;
      margin: auto;
    }
    margin-right: auto;
  }
  div.navigation {
    flex: 0 0 70px;
    background-color: #59b0a7;
    box-shadow: 0px 5px 5px 0px rgb(83 83 83);
    display: flex;
    padding: 0 15px;
    div.nav-item {
      margin: auto 10px;
      a.nav-link {
        font-size: 25px;
        text-decoration: none;
        color: #FFFFFF;
        padding: 0 20px;
        &.router-link-active {
          border: 2px solid #FFFFFF;
          border-radius: 50px;
        }
      }
    }
  }
  div.content {
    flex: 1 1 auto;
    display: flex;
    background-color: rgba(255, 255,255, 0.5);
  }
}
</style>
