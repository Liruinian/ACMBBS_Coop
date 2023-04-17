<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Loading from '@/components/Loading.vue'
import { useACMBBSStore } from '@/store'
import $ from 'jquery'
import { toast } from '@/js/toast'
import { ref } from 'vue'
import { getCurrentInstance } from 'vue'

const store = useACMBBSStore()
const loadingtext1 = ref('正在与后端服务器传递数据')
const loadingtext2 = ref('Loading: Getting data from backend server')
const loadingstatus = ref('loading')
const loading = ref(true)
// fetch('https://bbs.liruinian.top/api/getHomeSections', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   // body: JSON.stringify(data)
// })
//   .then((response) => response.json())
//   .then((result) => {
//     console.log(result.data)
//     store.posts = result.data
//     loading.value = false
//   })
//   .catch((error) => {
//     console.log(error)
//     loadingstatus.value = "error"
//     loadingtext1.value = "在与后端服务器连接时出现错误: @func getHomeSections"
//     loadingtext2.value = "如果您是网站管理员：请查看后端部分是否正常运行；\n如果您是用户，请与网站管理员联系或等待网站恢复正常再访问\n" + error
//   })

$.ajax({
  type: 'POST',
  url: 'https://bbs.liruinian.top/api/getHomeSections',
  success: function (result) {
    console.log(result)
    store.posts = result
    loading.value = false
    console.log(loading)
  },
  error: function (XMLHttpRequest, textStatus, errorThrown) {
    loadingstatus.value = 'error'
    loadingtext1.value = '在与后端服务器连接时出现错误: @func getHomeSections'
    loadingtext2.value =
      '如果您是网站管理员：请查看后端部分是否正常运行；\n如果您是用户，请与网站管理员联系或等待网站恢复正常再访问。\n'
  }
})


const internalInstance = getCurrentInstance()
const internalData = internalInstance.appContext.config.globalProperties
const id = internalData.$cookies.get('id') // 后面的为之前设置的cookies的名字

console.log(id)
</script>

<template>
  <Loading v-if="loading" :text1="loadingtext1" :text2="loadingtext2" :status="loadingstatus" />
  <el-container v-else>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-main>
        <el-scrollbar height="100%">
          <router-view></router-view>
          <Footer />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
.el-header {
  position: relative;
  width: 100%;
  height: 60px;
  padding: 0;
}

.el-main {
  position: absolute;
  width: 100%;
  right: 0;
  top: 60px;
  bottom: 0;
  padding: 5px 0;
}
</style>
