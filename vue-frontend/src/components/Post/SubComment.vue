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
  <div class="subcontainer" v-for="subComment in comment.subComments">
    <div class="subcomment">
      <img
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
        style="width: 30px"
      />
      &nbsp;
      <span class="dark-grey">{{ subComment.username }}</span>
    </div>

    <div class="subinfo">
      <el-text>{{ subComment.content }}</el-text>
      <div class="information dark-grey">
        {{ subComment.time }}
        <el-button
          v-if="!subComment.isLike"
          type="primary"
          link
          class="information dark-grey"
          @click="likeFunc('subcomment', subComment.id, subComment.isLike)"
          ><i class="fa fa-thumbs-o-up"></i>&nbsp; {{ subComment.likeCount }}</el-button
        >
        <el-button
          v-else
          type="primary"
          link
          class="information"
          @click="likeFunc('subcomment', subComment.id, subComment.isLike)"
          ><i class="fa fa-thumbs-o-up"></i>&nbsp; {{ subComment.likeCount }}</el-button
        >
      </div>
    </div>
  </div>
  <!-- 分页 -->
</template>

<style scoped>
.information {
  font-size: 14px;
}
.maincontent {
  display: block;
  height: 100px;
}
.dark-grey {
  color: #9499a0;
}
.subcomment {
  display: flex;
  align-items: center;
  width: fit-content;
}
.subcontainer {
  margin-left: 20px;
}
.subinfo {
  padding-left: 35px;
  margin: 5px 0;
}
</style>
