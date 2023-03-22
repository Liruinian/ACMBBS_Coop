<script>
export default {
  props: {
    username: String
  }
}
</script>
<template>
  <div class="login_form container">
    <div class="login_text">欢迎您登录ACMTeam_BBS!</div>
    <div>登录用户名：{{ username }}</div>
  </div>
</template>

<style scoped>
.login_text,
.login_btn {
  margin: 3px 0;
}
.login_form {
  width: 200px;
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
