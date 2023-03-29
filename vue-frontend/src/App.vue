<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <el-container>
    
    <el-header>
      <Header />
    </el-header>
    <el-container>
        <el-main> <el-scrollbar height="100%">
          <router-view></router-view>
        <Footer />
        <el-backtop :right="20" :bottom="100" />
      </el-scrollbar>
      </el-main>
    
      
    </el-container>  </el-container>
  
</template>

<style scoped>

.el-header {
  position: relative;
  width: 100%;
  height: 60px;
  padding: 0;
}

.el-main {
  position: absolute;
  width: 100%;
  right: 0;
  top: 60px;
  bottom: 0;
  padding: 5px 0;
}
</style>
