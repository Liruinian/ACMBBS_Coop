<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: {
    level:Number,
    point:Number,
    uid: Number,
    phone: String,
    email: String,
    username: String,
    studentid: String,
    realname: String,
    sex: String,
    description: String,
    regdate: String,
    birthdate: String
  }
})
</script>

<template>
  <div class="backgrounddiv">
    <div class="bgtextdiv">
      <p class="bgtext">NEAU<br />ACM</p>
    </div>
    <div class="form">
      UID: {{ uid }}
      <div>手机：{{ phone }}</div>
      <div>邮箱：{{ email }}</div>
      <div>等级：{{ level }}</div>
      <div>积分：{{ point }}</div>
      <div>昵称：{{ username }}</div>
      <div>学号：{{ studentid }}</div>
      <div>姓名：{{ realname }}</div>
      {{ regdate }}
      {{ birthdate }}
      性别：
      <div>
        <el-radio-group v-model="sex" disabled>
          <el-radio-button label="male">男</el-radio-button>
          <el-radio-button label="female">女</el-radio-button>
          <el-radio-button label="unknown">保密</el-radio-button>
        </el-radio-group>
      </div>
      <br />
      简介:
      <el-input
        type="textarea"
        maxlength="100"
        show-word-limit
        class="description"
        v-model="description"
        disabled
      />
    </div>
  </div>
</template>

<style scoped>
p {
  color: var(--el-text-color-regular);
}
.description {
  height: 150px;
}
.form {
  position: absolute;
  left: 0;
  width: 300px;
  margin: auto;
  padding: 20px;
  margin-top: 45px;
  background: var(--form-bg-color);
  box-shadow: 10px 10px 5px rgba(19, 40, 67, 0.51);
  overflow: hidden;
  backdrop-filter: saturate(180%) blur(20px);
}
.backgrounddiv {
  width: 100%;
  height: 600px;
  background-color: rgb(34, 74, 122);
}
.bgtextdiv {
  position: absolute;
  text-shadow: rgb(14, 41, 70) 10px 10px;
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
