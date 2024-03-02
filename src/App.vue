<template>
  <div class="wrapper">
    <div class="navigation">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Logo">
      </div>
    </div>
    <div class="content">
      <el-container class="container">
        <el-aside width="200px">
          <el-scrollbar>
            <el-menu>
              <router-link to="/home" class="nav-link" router-link-active>
                <el-menu-item index="1">
                  <template #title>
                    <el-icon><HomeFilled /></el-icon>
                    Home
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/settings" class="nav-link" router-link-active>
                <el-menu-item index="2">
                  <template #title>
                    <el-icon><Tools /></el-icon>
                    Settings
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/about" class="nav-link" router-link-active>
                <el-menu-item index="3">
                  <template #title>
                    <el-icon><StarFilled /></el-icon>
                    About
                  </template>
                </el-menu-item>
              </router-link>
              <router-link to="/contact" class="nav-link" router-link-active>
                <el-menu-item index="4">
                  <template #title>
                    <el-icon><PhoneFilled /></el-icon>
                    Contact Us
                  </template>
                </el-menu-item>
              </router-link>
            </el-menu>
          </el-scrollbar>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useCookies } from 'vue3-cookies'
import { useUserStore } from '@/store/userStore'

const { cookies } = useCookies()
const {
  setIsUserSignedIn,
  setSignedUser
} = useUserStore()

const { isUserSignedIn } = storeToRefs(useUserStore())


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
  }
})

watch(isUserSignedIn, (newValue) => {
  if (!newValue) {
    window.location.href = '/login'
  }
})
</script>

<style lang="scss">
div.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  
  div.navigation {
    flex: 0 0 70px;
    background-color: #59b0a7;
    box-shadow: 0px 5px 5px 0px rgba(83, 83, 83, 0.5);
    display: flex;
    padding: 0 15px;
    z-index: 9;
    div.logo {
      display: flex;
      img {
        height: 50px;
        margin: auto;
      }
      margin-right: auto;
    }
  }
  div.content {
    flex: 1 1 auto;
    display: flex;
    background-color: rgba(255, 255,255, 0.5);
    overflow: auto;
    .container {
      .el-aside {
        background: rgba(89, 176, 167, 0.7);
        .el-menu {
          a {
            text-decoration: none;
            .el-menu-item {
              background: #068a7d;
              color: #FFFFFF;
              &:hover {
                background: rgba(2,50, 45, 0.5);
              }
            }
            &.router-link-active {
              .el-menu-item {
                background: #02322d;
              }
            }
          }
        }
      }
    }
  }
}
</style>
