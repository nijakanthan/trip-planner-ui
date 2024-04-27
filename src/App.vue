<template>
  <div class="wrapper">
    <div class="navigation">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="Logo">
      </div>
      <div class="version">
        <span>Bal - {{ versionObjectBal }}</span>
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
import { onMounted, ref } from 'vue'
import { Version } from '@/apis/interfaces'
import { getAppVersionBal } from '@/apis/get-version'

const versionObjectBal = ref<Version | undefined>(undefined)

onMounted(async (): Promise<void> => {
  versionObjectBal.value = (await getAppVersionBal()).data
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
    div.version {
      display: flex;
      span {
        margin: auto;
        font-size: 24px;
        color: #FFFFFF;
      }
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
