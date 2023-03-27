<script lang="ts">
export default {
  props: {
    post_title: String,
    post_author: String,
    post_id: Number,
    post_content: String,
    post_time: String
  }
}
</script>
<template>
  <div class="post_cont">
    <div class="post_id">{{ post_id }}</div>
    <div class="post_title boldtext">{{ post_title }}</div>
    <div class="post_content">{{ post_content }}</div>
    <div class="post_author"><i class="fa fa-user-circle"></i> {{ post_author }}</div>
    <div class="post_time"><i class="fa fa-clock-o"></i> {{ post_time }}</div>
  </div>
</template>

<style scoped>
.boldtext {
  font-weight: bold;
}
.post_cont {
  display: block;
  font-size: 16px;
  cursor: pointer;
  margin: 0 10px;
}
.post_author,
.post_time,
.post_id {
  font-size: 14px;
}
.post_author,
.post_title,
.post_id {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post_tag,
.post_time {
  color: gray;
}
</style>
