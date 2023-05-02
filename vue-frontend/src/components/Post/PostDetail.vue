<script setup>
import API from '@/js/axios'
import PostContent from './PostContent.vue'
import CommentDetail from './CommentDetail.vue'
import SubComment from './SubComment.vue'
import { toast } from '@/js/toast'

const props = defineProps(['postslist'])
var post = props.postslist

const customConfig = {
  headers: {
    'Content-Type': 'application/json'
  }
}
const likeFunc = (type, id, isLiked) => {
  var uri = ''
  var jsondata = ''
  if (type == 'post') {
    uri = 'likePost'
    jsondata = JSON.stringify({
      postId: id,
      isLike: isLiked
    })
    console.log(jsondata)
  } else if (type == 'comment') {
    uri = 'likeComment'
    jsondata = JSON.stringify({
      commentId: id,
      isLike: isLiked
    })
    console.log(jsondata)
  } else if (type == 'subcomment') {
    uri = 'likeSub'
    jsondata = JSON.stringify({
      subId: id,
      isLike: isLiked
    })
    console.log(jsondata)
  } else {
    console.log('Like Func: Unknown type!')
    return
  }
  API.post(uri, jsondata, customConfig).then((response) => {
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
  <PostContent :post="post" :likeFunc="likeFunc" />
  <!-- <mavon-editor 
  v-model="value"
  :ishljs="true"
  /> -->

  <el-pagination
    :hide-on-single-page="true"
    v-model:current-page="post.commentPage"
    :page-size="20"
    layout="prev, pager, next, jumper"
    v-model:total="post.commentCount"
    @current-change="handleCommentChange"
  />

  <div class="comment container" v-for="comment in post.comments">
    <CommentDetail :comment="comment" :likeFunc="likeFunc" />

    <SubComment :comment="comment" :likeFunc="likeFunc" />
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
