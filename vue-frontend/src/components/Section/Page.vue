<script setup>
import Post from './PostListSingle.vue'
import { ref } from 'vue'
import $ from 'jquery'
import router from '@/router'
import { useACMBBSStore } from '@/store'

const store = useACMBBSStore()
const props = defineProps(['id'])
var pageNumber = ref(1)

var posts = ''

const update_pages = () => {
  var data = {
    sectionId: parseInt(props.id),
    pageNum: pageNumber.value
  }
  var jsondata = JSON.stringify(data)
  console.log(jsondata)

  $.ajax({
    type: 'POST',
    url: 'https://bbs.liruinian.top/api/getPostList',
    async: false,
    data: jsondata,
    success: function (result) {
      console.log(result)
      var jsonParsed = JSON.parse(result)
      posts = jsonParsed.data
    }
  })

  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

update_pages(pageNumber)
const handleCurrentChange = (val) => {
  pageNumber.value = val

  update_pages(pageNumber)
}
const goBack = () => {
  router.push({ path: '/' })
}
</script>
<template>
  <div class="header_title">
    <el-page-header @back="goBack" title="返回">
      <template #content>
        <span class="text-large font-600 mr-3">
          {{ JSON.parse(store.posts).data[id - 1].Section }} ({{ posts.postCount }})
        </span>
      </template>
    </el-page-header>
  </div>
  <div class="PostListPageCont">
    <el-pagination
      :hide-on-single-page="true"
      v-model:current-page="pageNumber"
      :page-size="20"
      layout="prev, pager, next, jumper"
      v-model:total="posts.postCount"
      @current-change="handleCurrentChange"
    />
    <div class="container PostListContainer shadow" v-for="post in posts.posts">
      <router-link :to="'/post/' + post.id">
        <Post
          :post_title="post.title"
          :post_author="post.username"
          :post_id="post.id"
          :post_content="post.content"
          :post_time="post.time"
        />
      </router-link>
    </div>

    <el-pagination
      :hide-on-single-page="true"
      v-model:current-page="pageNumber"
      :page-size="20"
      layout="prev, pager, next, jumper"
      v-model:total="posts.postCount"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style scoped>
.PostListPageCont {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.PostListContainer {
  width: 90%;
}
</style>
