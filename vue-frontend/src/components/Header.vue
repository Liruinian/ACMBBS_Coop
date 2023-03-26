<script setup>
import { useDark } from '@vueuse/core'
import { ref } from 'vue'
import { useACMBBSStore } from '@/store'
import $ from 'jquery'
const store = useACMBBSStore()
$.ajax({
  type: 'POST',
  url: 'https://bbs.liruinian.top/api/getHomeSections',
  async:false,
  success: function (result) {
    console.log(result)
    var jsonParsed = JSON.parse(result)
    store.posts =  jsonParsed.data
  
  }
})

const sectionarr = store.posts
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
      <template v-for="section in sectionarr">
      <router-link :to="'/section/'+section.id">
      <el-menu-item :index="'2-'+section.id">{{ section.Section }}</el-menu-item>
      </router-link>
    </template>
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
    <el-sub-menu index="3" v-if="store.logged">
      <template #title><el-avatar
          :size="30"
          :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
        />&nbsp {{ store.username }}</template>
        <router-link to="/account"><el-menu-item index="3-1">个人主页</el-menu-item></router-link>
      <el-menu-item index="3-2">登出</el-menu-item>
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
