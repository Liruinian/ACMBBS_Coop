<script setup>
import API from '@/js/axios'
import PostContent from './PostContent.vue'
import Comment from './Comment.vue'
import CommentDetail from './CommentDetail.vue'
import SubComment from './SubComment.vue'

const props = defineProps(['postslist'])
var post = props.postslist

const customConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
}
const likeFunc = (type, id) => {
  let jsondata = JSON.stringify({})
  console.log(jsondata)
  API.post('likePost', jsondata, customConfig).then((response) => {
    var result = response.data
    console.log(result)
    if (result.status !== 2000) {
      toast('失败', result.message, 'error')
    } else {
      toast('成功', result.message, 'success')
    }
  })
}

const updatecomment = () => {
  var data = {
    // ?
  }
  var jsondata = JSON.stringify(data)
  console.log(jsondata)
  // TODO: ajax
}

const handleCommentChange = (val) => {
  updatecomment(val)
}

</script>

<template>
  <PostContent :post="post" :likeFunc="likeFunc"/>
  <!-- <mavon-editor 
  v-model="value"
  :ishljs="true"
  /> -->
  <Comment type="Comment" :id="post.id" />
  <el-pagination
    :hide-on-single-page="true"
    v-model:current-page="post.commentPage"
    :page-size="20"
    layout="prev, pager, next, jumper"
    v-model:total="post.commentCount"
    @current-change="handleCommentChange"
  />

  <div class="comment container" v-for="comment in post.comments">
    <CommentDetail :comment="comment" :likeFunc="likeFunc"/>
    <Comment type="SubComment" :id="comment.id" />
    <SubComment :comment="comment.subComments" :likeFunc="likeFunc"/>
  </div>
  <el-pagination
    :hide-on-single-page="true"
    v-model:current-page="post.commentPage"
    :page-size="20"
    layout="prev, pager, next, jumper"
    v-model:total="post.commentCount"
    @current-change="handleCommentChange"
  />
</template>

<style scoped>

.comment {
  flex-direction: column;
}

.grey {
  color: grey;
}
</style>
