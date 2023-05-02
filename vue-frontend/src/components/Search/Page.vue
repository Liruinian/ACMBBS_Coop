<script setup>
import { ref } from 'vue'
import $ from 'jquery'
import router from '@/router'
import { useACMBBSStore } from '@/store'

const store = useACMBBSStore()
const props = defineProps(['id'])
var pageNumber = ref(1)
var comment = ref('')

const data = {
  pageNum:pageNumber,
  searchString: comment
}


$.ajax({
  type: 'POST',
  url: 'https://bbs.liruinian.top/api/searchPost',
  dataType: 'json',
  data: JSON.stringify(data),
  contentType: 'application/json',
  success: function (result) {
    console.log(result)
    if (result.status != 2000) {
      toast('获取用户信息失败', result.message, 'error')
    } else {
      accarr = result.data
      console.log(accarr)
    }
  }
})
</script>

<template>
  <div class="search-box">
    <el-input
      v-model="comment"
      maxlength="30"
      placeholder="请输入搜索内容"
      show-word-limit
      type="textarea"
    />
    <el-button type="primary" class="search-btn"><i class="fa fa-search" ></i></el-button>
  </div>
</template>

<style scoped>
.search-btn {
  flex: 1;
  height: 52px;
}
.search-box {
  display: flex;
  margin: 20px;
}
</style>