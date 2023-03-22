<script setup>
const phone = ref('')
const username = ref('')
const email = ref('')
const studentid = ref('')
const realname = ref('')
const pass = ref('')
const passc = ref('')
const sex = ref('unknown')
const description = ref('这个人很神秘，没有留下个人简介...')

var valid = false
var passwordc = false

function check() {
  let passcorrect = document.getElementsByClassName('passcor')[0]
  let passwrong = document.getElementsByClassName('passwro')[0]
  let strongRegex = new RegExp('^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$', 'g')
  let mediumRegex = new RegExp(
    '^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$',
    'g'
  )
  let enoughRegex = new RegExp('(?=.{6,}).*', 'g')
  let reminder = document.getElementById('reminder')

  let p_test = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
  let em_test = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
  let studentid_test = /^A[0-9]{8}$/

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
        '<i class="fa fa-ban" style="color: rgb(255, 137, 137)">&nbsp;密码强度不足，至少为六位字符</i>'
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

  if (!p_test.test(phone.value) && phone.value != '') {
    reminder.innerHTML = '手机号码格式不正确'
  } else {
    reminder.innerHTML = ''
    if (!em_test.test(email.value) && email.value != '') {
      reminder.innerHTML = '邮箱格式不正确'
    } else {
      reminder.innerHTML = ''
      if (p_test.test(username.value) || em_test.test(username.value)) {
        reminder.innerHTML = '用户名不能使用手机或邮箱'
      } else {
        reminder.innerHTML = ''
        if (!studentid_test.test(studentid.value) && studentid.value != '') {
          reminder.innerHTML = '学号格式不正确'
        } else {
          reminder.innerHTML = ''
          if (phone.value != '' && email.value != '' && username.value != '' && passwordc) {
            valid = true
          }
        }
      }
    }
  }
}
</script>
<script>
import { defineComponent, ref } from 'vue'
import { signup } from '../assets/js/Signup'
export default defineComponent({
  setup() {
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
      <el-input type="text" v-model="phone" @change="check" placeholder="手机（必填）" />
      <el-input type="text" v-model="email" @change="check" placeholder="邮箱（必填）" />
      <el-input type="text" v-model="username" @change="check" placeholder="昵称（必填，3-20字）" />
      <el-input type="text" v-model="studentid" @change="check" placeholder="学号" />
      <el-input type="text" v-model="realname" @change="check" placeholder="真实姓名" />
      <div style="display: flex">
        <p>性别：</p>
        <el-radio-group v-model="sex">
          <el-radio-button label="male">男</el-radio-button>
          <el-radio-button label="female">女</el-radio-button>
          <el-radio-button label="unknown">保密</el-radio-button>
        </el-radio-group>
      </div>
      <br />
      <el-input type="password" v-model="pass" placeholder="密码" @change="check" />
      <el-input type="password" v-model="passc" placeholder="确认密码" @change="check" />
      <span class="passwro" style="display: block"
        ><i class="fa fa-ban" style="color: rgb(255, 137, 137)">&nbsp;密码不能为空</i></span
      >
      <span class="passcor" style="display: none"
        ><i class="fa fa-check-square-o" style="color: rgb(137, 255, 190)"
          >&nbsp;可以使用此密码</i
        ></span
      ><br />
      <div id="reminder" class="notetext" style="color: rgb(255, 137, 137)">
        推荐密码为八位及以上，并且包括字母数字特殊字符三项
      </div>
      <div
        class="signup_btn"
        id="signup"
        @click="signup(phone, email, username, studentid, realname, pass, sex, description, valid)"
      >
        注册
      </div>
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
