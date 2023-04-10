<script setup>
const props = defineProps(['comment', 'likeFunc'])
var comment = props.comment
const likeFunc = props.likeFunc

const updatesubcomment = () => {
  var data = {
    // ?
  }
  var jsondata = JSON.stringify(data)
  console.log(jsondata)
  // TODO: ajax
}

const handleSubCommentChange = (val) => {
  updatesubcomment(val)
}
</script>

  <template>
          <div class="subcomments container" v-for="subComment in comment.subComments">
        <p><i class="fa fa-user-circle"></i> {{ subComment.username }} : {{ subComment.content }}</p>
        <p class="grey">
          {{ subComment.time }}
          <el-button type="text" @click="likeFunc('subcomment',subComment.id,subComment.isLike)"
            ><i class="fa fa-thumbs-o-up"></i>&nbsp; {{ subComment.likeCount }}</el-button
          >
        </p>
      </div>
      <!-- 分页 -->
  </template>
