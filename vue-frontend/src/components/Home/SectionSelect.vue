<script setup>
import { useDevicesList } from '@vueuse/core'
import Post from '../Post.vue'
const props = defineProps({
  section_title: String,
  section_id: Number,
  section_href: String,
  section_logo: String,
  post: Object,
  devicetype: String
})
const section_title = props.section_title
const section_id = props.section_id
const section_href = props.section_href
const section_logo = props.section_logo
const post = props.post
const devicetype = props.devicetype
</script>
<template>
  <router-link :to="section_href" :class="devicetype == 'desktop' ? '' : 'mobile'">
    <div
      :class="
        devicetype == 'desktop'
          ? 'desktop section_cont container shadow'
          : 'section_cont container shadow'
      "
      id="section_cont"
    >
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
  width: 80%;
  font-size: 10px;
}
.section_cont {
  display: flex;
  overflow: hidden;
}
.desktop {
  width: 300px;
}
.section_title {
  width: 20%;
  margin-top: 25px;
  text-align: center;
  font-size: 14px;
}
.mobile {
  width: 100%;
}
</style>
