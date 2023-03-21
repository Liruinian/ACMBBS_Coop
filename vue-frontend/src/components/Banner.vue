<script setup lang="ts">
import Login from './Login.vue'
import Carousel from './Carousel.vue'
</script>
<template>
  <div class="rec_container">
    <div class="recommendation container">
      <div class="boldtext"><i class="fa fa-thumbs-o-up"></i> 推荐内容</div>
      <Carousel />
    </div>
    <Login />
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
