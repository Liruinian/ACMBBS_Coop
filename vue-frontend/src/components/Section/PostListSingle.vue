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
    <div class="post_header">
      <span class="post_title boldtext">{{ post_title }}</span>
      <span class="post_id">PID: {{ post_id }}</span>
    </div>
    <div class="post_content">
      <p>{{ post_content }}</p>
    </div>

    <div class="post_footer">
      <span class="post_author"><i class="fa fa-user-circle"></i> {{ post_author }}</span>

      &nbsp;
      <span class="post_time"><i class="fa fa-clock-o"></i> {{ post_time }}</span>
    </div>
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
  flex: 1;
  font-size: 14px;
}
.post_author,
.post_title,
.post_id {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.post_title {
  flex: 6;
}
.post_time {
  color: gray;
}
.post_footer {
  display: flex;
}
.post_id,
.post_time {
  text-align: right;
}

.post_header {
  display: flex;
}
</style>
