<script setup>
import { useDark } from '@vueuse/core'
import { ref } from 'vue'
import { useACMBBSStore } from '@/store'
import { useLocalStorage } from '@vueuse/core'
import DeviceDetector from 'device-detector-js'

const store = useACMBBSStore()

const deviceDetector = new DeviceDetector()
const userAgent = window.navigator.userAgent
var device = deviceDetector.parse(userAgent)
store.deviceType = device.device.type

const sectionarr = ref(JSON.parse(store.posts).data)
// const sectionarr = store.posts
const activeIndex = ref('0')
const isDark = useDark()

const logout = function (){
  localStorage.clear();
  window.location.reload();
}
</script>
<template>
  <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false">
    <router-link to="/" v-if="device.device.type == 'desktop'"
      ><el-menu-item index="0"
        ><span class="title">NEAUACMTeam_BBS</span></el-menu-item
      ></router-link
    >
    <router-link to="/"><el-menu-item index="1">主页</el-menu-item></router-link>

    <el-sub-menu index="2">
      <template #title>所有板块</template>
      <template v-for="section in sectionarr">
        <router-link :to="'/section/' + section.id">
          <el-menu-item :index="'2-' + section.id">{{ section.Section }}</el-menu-item>
        </router-link>
      </template>
    </el-sub-menu>
    <div class="flex-grow" />
    <router-link :to="'/search'">
    <el-menu-item index="search" v-if="device.device.type == 'desktop'">
      <i class="fa fa-search" ></i>
    </el-menu-item>
  </router-link>
    <el-menu-item index="dark" v-if="device.device.type == 'desktop'">
      &nbsp
      <el-switch
        v-model="isDark"
        inline-prompt
        style="--el-switch-on-color: #000"
        size="large"
        active-text="暗黑模式"
        inactive-text="白天模式"
      />
    </el-menu-item>
    <el-sub-menu index="3" v-if="store.logged">
      <template #title
        ><el-avatar
          :size="30"
          :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
        />&nbsp {{ store.username }}</template
      >
      <router-link to="/account"><el-menu-item index="3-1">个人主页</el-menu-item></router-link>
      <el-menu-item index="3-2" @click="logout">登出</el-menu-item>
    </el-sub-menu>
    <router-link to="/">
      <el-menu-item index="3" v-if="!store.logged">
        <el-avatar
          :size="30"
          :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
        />&nbsp {{ store.username }}
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<style>
.title {
  font-size: 20px;
  font-weight: bold;
}
.flex-grow {
  flex-grow: 1;
}
</style>
