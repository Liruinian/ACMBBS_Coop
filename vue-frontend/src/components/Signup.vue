<script setup>
//TODO: 找其他的密码校验来修改
let sex = ref('unknown')
    let description = ref('这个人很神秘，没有留下个人简介...')
let passwordc = false
function passconfirm(event) {
  console.log(event)
  let pass = document.getElementById('password')
  let passc = document.getElementById('passwordc')
  let passcorrect = document.getElementsByClassName('passcor')[0]
  let passwrong = document.getElementsByClassName('passwro')[0]

  let strongRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$', 'g')
  let mediumRegex = new RegExp(
    '^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$',
    'g'
  )
  let enoughRegex = new RegExp('(?=.{6,}).*', 'g')

  if (pass.value == passc.value) {
    if (pass.value.match(strongRegex)) {
      passcorrect.style.display = 'block'
      passwrong.style.display = 'none'
      passwordc = true

      passcorrect.innerHTML =
        '<i class="fa fa-check-square-o" style="color: rgb(75, 191, 94)">&nbsp;密码强度：强</i>'
    } else if (pass.value.match(mediumRegex)) {
      passcorrect.style.display = 'block'
      passwrong.style.display = 'none'
      passwordc = true

      passcorrect.innerHTML =
        '<i class="fa fa-check-square-o" style="color: rgb(112, 198, 252)">&nbsp;密码强度：中</i>'
    } else if (pass.value.match(enoughRegex)) {
      passcorrect.style.display = 'block'
      passwrong.style.display = 'none'
      passwordc = true

      passcorrect.innerHTML =
        '<i class="fa fa-check-square-o" style="color: rgb(236, 110, 45)">&nbsp;密码强度：弱</i>'
    } else {
      passwrong.innerHTML =
        '<i class="fa fa-ban" style="color: rgb(255, 137, 137)">&nbsp;密码不符合规范，密码推荐为八位及以上，并且包括字母数字特殊字符三项</i>'
      passwrong.style.display = 'block'
      passcorrect.style.display = 'none'
      passwordc = false
    }
  } else {
    passwrong.innerHTML =
      '<i class="fa fa-ban" style="color: rgb(255, 137, 137)">&nbsp;两次密码输入不一致</i>'
    passwrong.style.display = 'block'
    passcorrect.style.display = 'none'
    passwordc = false
  }

  if (pass.value == '') {
    passwrong.innerHTML =
      '<i class="fa fa-ban" style="color: rgb(255, 137, 137)">&nbsp;两次密码输入不一致</i>'
    passcorrect.style.display = 'none'
    passwrong.style.display = 'block'
    passwordc = false
  }
}
</script>
<script>
import { defineComponent, ref, reactive } from 'vue'
export default defineComponent({
  setup() {
    let sex = ref('unknown')
    let description = ref('这个人很神秘，没有留下个人简介...')
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
      <el-input type="text" id="phone" placeholder="手机（必填）" />
      <el-input type="text" id="email" placeholder="邮箱（必填）" />
      <el-input type="text" id="username" placeholder="昵称（必填，3-20字）" />
      <el-input type="text" name="idnum" id="idnum" placeholder="学号" />
      <el-input type="text" name="realname" id="realname" placeholder="真实姓名" />
      性别：
      <a-radio-group v-model:value="sex">
        <a-radio-button value="male">男</a-radio-button>
        <a-radio-button value="female">女</a-radio-button>
        <a-radio-button value="unknown">保密</a-radio-button>
      </a-radio-group>
      <br />
      <el-input
        type="password"
        name="password"
        id="password"
        placeholder="密码"
        @change="passconfirm"
      />
      <el-input
        type="password"
        id="passconfirm"
        placeholder="确认密码"
        @change="passconfirm"
      />
      <span class="passwro" style="display: block"
        ><i class="fa fa-ban" style="color: rgb(255, 137, 137)">&nbsp;密码不能为空</i></span
      >
      <span class="passcor" style="display: none"
        ><i class="fa fa-check-square-o" style="color: rgb(137, 255, 190)"
          >&nbsp;可以使用此密码</i
        ></span
      ><br />
      <div id="pass_reminder" class="notetext">
        推荐密码为八位及以上，并且包括字母数字特殊字符三项
      </div>
      <div class="signup_btn" id="signup" onclick="signup()">注册</div>
    </div>
  </div>
</template>

<style scoped>
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
  color: white;
  box-shadow: 10px 10px 5px rgb(34, 74, 122, 0.5);
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
