<script setup>
import { ref } from 'vue'
const comment = ref('')
const props = defineProps(['type', 'id'])
const type = props.type
const id = props.id
</script>

<template>
  <div class="comment-box">
    <el-input
      v-model="comment"
      maxlength="100"
      placeholder="友善留言哦~~"
      show-word-limit
      type="textarea"
    />
    <el-button type="primary" class="comment_btn">评论</el-button>
  </div>
</template>

<style scoped>
.comment_btn {
  flex: 1;
  height: 52px;
}
.comment-box {
  display: flex;
  margin: 20px;
}


</style>