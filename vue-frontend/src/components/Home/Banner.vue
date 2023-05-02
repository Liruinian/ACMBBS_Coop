<script setup>
import Login from './Login.vue'
import Carousel from './Carousel.vue'
import Logged from './Logged.vue'
</script>
<script>
export default {
  props: {
    logged: Boolean,
    username: String,
    devicetype: String
  }
}
</script>
<template>
  <div :class="devicetype == 'desktop' ? 'rec_container' : ''">
    <div class="recommendation container">
      <div class="boldtext"><i class="fa fa-thumbs-o-up"></i> 推荐内容</div>
      <Carousel :devicetype="devicetype" />
      <!-- <el-skeleton :rows="5" animated /> -->
    </div>
    <Login v-if="!logged" />
    <Logged v-if="logged" :username="username" />
  </div>
</template>

<style scoped>
.rec_container {
  display: flex;
  margin: 0;
}
.recommendation {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
