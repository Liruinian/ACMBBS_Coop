<script setup>
import { login } from '@/js/login'
import { ref } from 'vue'
const account = ref('')
const password = ref('')

</script>
<template>
  <div class="container">
    <div class="login_text">欢迎登录ACMTeam_BBS!</div>
    <el-input type="text" name="account" v-model="account" placeholder="账号" /><br />
    <el-input type="password" name="password" v-model="password" placeholder="密码" /><br />
    <el-button type="primary" class="login_btn" @click.native="login(account, password)"
      >登录</el-button
    >
    <router-link to="/signup"
      ><el-button type="primary" class="login_btn">注册</el-button></router-link
    >
  </div>
</template>

<style scoped>

.login_text,
.login_btn {
  margin: 3px 0;
}
.login_btn {
  background-color: rgb(12, 26, 145);
  width: 100%;
  transition: 0.5s;
}
.login_btn:hover {
  background-color: rgb(6, 14, 78);
}
</style>
