<script setup>
import $ from 'jquery'

var hotpost = ''
$.ajax({
  type: 'POST',
  url: 'https://bbs.liruinian.top/api/getHotPost',
  async: false,
  success: function (result) {
    console.log(result)
    var jsonParsed = JSON.parse(result)
    hotpost = jsonParsed.data
  }
})

console.log(hotpost)
</script>
<template>
  <div class="hot_topic container">
    <div class="boldtext"><i class="fa fa-fire"></i> 全站热点</div>
    <div v-for="post in hotpost">
      <router-link class="topic_cont" :to="'post/' + post.id">
        <div class="flex_title">
          {{ post.title }}
        </div>
        <div class="views">浏览量：{{ post.clickTimes }}</div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.topic_cont {
  display: flex;
  margin: 5px;
}
.flex_title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}
.views {
  color: gray;
}
</style>
