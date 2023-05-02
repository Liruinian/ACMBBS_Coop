<script setup>
import Comment from './Comment.vue'
import { ref } from 'vue'

const props = defineProps(['comment', 'likeFunc'])
var comment = props.comment
const likeFunc = props.likeFunc

const uplcomment = ref(true)
</script>
<template>
  <div class="comments">
    <div class="ccontainer">
      <img
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        style="width: 50px"
      />
      &nbsp;{{ comment.username }}
    </div>
    <div class="content">
      <el-text size="large">{{ comment.content }}</el-text>
      <div class="information">
        {{ comment.time }} &nbsp; &nbsp;
        <el-button
          v-if="!comment.isLike"
          type="primary"
          link
          class="information grey"
          @click="likeFunc('comment', comment.id, comment.isLike)"
          ><i class="fa fa-thumbs-o-up"></i>&nbsp; {{ comment.likeCount }}</el-button
        >
        <el-button
          v-else
          type="primary"
          link
          class="information"
          @click="likeFunc('comment', comment.id, comment.isLike)"
          ><i class="fa fa-thumbs-o-up"></i>&nbsp; {{ comment.likeCount }}</el-button
        >
        &nbsp;
        <el-button type="primary" link class="information" @click="uplcomment = !uplcomment"
          >回复</el-button
        >
      </div>
    </div>
  </div>
  <div v-if="uplcomment"></div>
  <Comment type="SubComment" :id="comment.id" v-else />
</template>
<style scoped>
.information {
  color: #9499a0;
}
.ccontainer {
  display: flex;
  align-items: center;
}
.comments {
  padding-left: 5px;
  margin: 10px 0;
}
.content {
  padding-left: 55px;
}
</style>
