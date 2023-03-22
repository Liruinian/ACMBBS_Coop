<script setup>
import { useDark } from '@vueuse/core'
import { ref } from 'vue'
import { useACMBBSStore } from '@/store'

const store = useACMBBSStore()
const activeIndex = ref('0')
const isDark = useDark()
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    mode="horizontal"
    :ellipsis="false"
  >
    <router-link to="/"
      ><el-menu-item index="0"
        ><span class="title">NEAUACMTeam_BBS</span></el-menu-item
      ></router-link
    >
    <router-link to="/"><el-menu-item index="1">主页</el-menu-item></router-link>
    <el-sub-menu index="2">
      <template #title>所有板块</template>
      <router-link to="/section/1"
      >
      <el-menu-item index="2-1">学术研讨</el-menu-item>
      </router-link
    >
    <router-link to="/section/2"
      >
      <el-menu-item index="2-2">休闲娱乐</el-menu-item>
      </router-link
    >
    <router-link to="/section/3"
      >
      <el-menu-item index="2-3">校园风情</el-menu-item>
      </router-link
    >
    <router-link to="/section/4"
      >
      <el-menu-item index="2-3">吃在东农</el-menu-item>
      </router-link
    >
    </el-sub-menu>
    <div class="flex-grow" />
    <el-menu-item index="dark">
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
    <el-sub-menu index="3">
      <template #title><el-avatar
          :size="30"
          :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
        />&nbsp {{ store.username }}</template>
        <router-link to="/account"><el-menu-item index="3-1">个人主页</el-menu-item></router-link>
      <el-menu-item index="3-2">登出</el-menu-item>
      </el-sub-menu>
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
