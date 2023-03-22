<script setup>
import Post from '../Post.vue'
</script>
<script>
export default {
  components: {
    Post
  },
  props: {
    section_title: String,
    section_id: Number,
    section_href:String,
    section_logo: String,
    post: Object
  }
}
</script>
<template>
  <router-link :to=section_href>
  <div class="section_cont container" id="section_cont">
    <div class="section_title"><i v-bind:class="section_logo"></i><br />{{ section_title }}</div>
    <div class="section_container">
      最新帖子：
      <Post
        :post_title="post.title"
        :post_author="post.author"
        :post_tag="post.tag"
        :post_time="post.time"
      />
    </div>
  </div>
  </router-link>
</template>

<style scoped>
.section_container {
  width:80%;
  font-size: 10px;
}
.section_cont {
  display: flex;
  width:300px;
  overflow:hidden;
}
.section_title {
  width:20%;
  margin-top: 25px;
  text-align: center;
  font-size: 14px;
}
</style>
