<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    phone: String,
    email: String,
    username: String,
    studentid: String,
    realname: String,
    sex: String
  },
  setup() {
    let sex = ref<string>('unknown')
    let description = ref<string>('这个人很神秘，没有留下个人简介...')
    return {
      sex,
      description
    }
  }
})
</script>

<template>
  <div class="backgrounddiv">
    <div class="bgtextdiv">
      <p class="bgtext">NEAU<br />ACM</p>
    </div>
    <div class="form">
      <p>手机：{{ phone }}</p>
      <p>邮箱：{{ email }}</p>
      <p>昵称：{{ username }}</p>
      <p>学号：{{ studentid }}</p>
      <p>姓名：{{ realname }}</p>
      性别：
      <div>
        <el-radio-group v-model="sex">
          <el-radio-button label="male">男</el-radio-button>
          <el-radio-button label="female">女</el-radio-button>
          <el-radio-button label="unknown">保密</el-radio-button>
        </el-radio-group>
      </div>
      <br />
      简介:
      <el-input type="textarea" maxlength="100" show-word-limit class="description" v-model="description" />
    </div>
  </div>
</template>

<style scoped>
.description {
  height: 150px;
}
.signup_btn {
  padding-left: 10px;
  width: 320px;
  height: 30px;
  margin: 20px 0;
  background-color: rgb(12, 26, 145);
  color: white;
  padding-top: 6px;
}
.signup_btn:hover {
  background-color: rgb(6, 14, 78);
  cursor: pointer;
}
.form {
  position: absolute;
  left: 0;
  width: 300px;
  margin: auto;
  padding: 20px;
  margin-top: 45px;
  background-color: var(--form-bg-color);
  box-shadow: 10px 10px 5px rgba(19, 40, 67, 0.51);
  overflow: hidden;
}
.backgrounddiv {
  width: 100%;
  height: 600px;
  background-color: rgb(34, 74, 122);
}
.bgtextdiv {
  position: absolute;
  right: 0;
  text-align: right;
  margin-top: 0;
}
.bgtext {
  color: white;
  font-size: 150px;
  font-weight: bolder;
  margin-top: 0;
}
.notetext {
  font-size: 14px;
}
</style>
