<script setup>
import $ from 'jquery'
import PostDetail from './PostDetail.vue'
import router from '@/router'

const props = defineProps(['id'])
var post = ''
var data = {
  postId: parseInt(props.id)
}
var jsondata = JSON.stringify(data)
console.log(jsondata)
$.ajax({
  type: 'POST',
  url: 'https://bbs.liruinian.top/api/postDetail',
  async: false,
  data: jsondata,
  success: function (result) {
    console.log(result)
    var jsonParsed = JSON.parse(result)
    post = jsonParsed.data
  }
})

const goBack = () => {
  router.go(-1)
}
</script>
<template>
  <div class="header_title hidoverflow">
    <el-page-header @back="goBack" title="返回">
      <template #content>
        <span class="text-large font-600 mr-3">
          {{ post.title }}
        </span>
      </template>
    </el-page-header>
  </div>
  <PostDetail :postslist="post" />
</template>
