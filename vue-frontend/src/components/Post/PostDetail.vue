<script setup>
import API from '@/js/axios'


const props = defineProps(['postslist'])
var post = props.postslist

let jsondata = JSON.stringify({
      
    })
    console.log(jsondata)
    const customConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

const likeFunc = () => {
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
</script>

<template>
  <div class="container">
    <div class="sidebar">
      <el-image
        style="width: 100px; height: 100px"
        :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
      />

      <div class="post_author">
        <p><i class="fa fa-user-circle"></i> {{ post.username }}</p>
        <div class="post_time">
          <p>{{ post.time }}</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="post_content">
        <p>{{ marked(post.content) }}</p>
      </div>
<div class="post_footer">
  <div class="pfooter_left">
        <div class="post_tag">
        {{ post.tag }}
      </div>
      <div class="post_click">浏览量：{{ post.clickTimes }}</div>
      </div>
      <div>
        <el-button @click="likeFunc">点赞{{ post.likeCount }}</el-button>
      </div>
</div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}

.sidebar {
  flex: 1;
  border-right: 1px solid;
}
.content {
  flex: 5;
}
.sidebar,
.content {
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.post_tag {
  color: gray;
}
.post_content {
  flex: 1;
}
.post_footer{
  display: flex;
}
.pfooter_left{
  flex:1
}
</style>
