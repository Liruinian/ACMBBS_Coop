<script setup>
import Post from './Post.vue'
</script>
<script>
export default {
  components: {
    Post
  },
  props: {
    section_title: String,
    section_logo: String,
    post: Object
  }
}
</script>
<template>
  <div class="section_cont container" id="section_cont">
    <div class="section_title"><i v-bind:class="section_logo"></i><br />{{ section_title }}</div>
    <div class="section_container">
      最新帖子：
      <Post
        :post_title=post.title
        :post_author=post.author
        :post_tag=post.tag
        :post_time=post.time
      />
    </div>
  </div>
</template>

<style scoped>
.section_container {
  font-size: 10px;
}
.section_cont {
  display: flex;
  width: 300px;
}
.section_title {
  margin-top: 25px;
  text-align: center;
  font-size: 14px;
}
</style>
