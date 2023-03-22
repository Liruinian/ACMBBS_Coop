import { ElNotification } from 'element-plus'
import md5 from 'blueimp-md5'
function toast(title, message, type) {
  ElNotification({
    title: title,
    message: message,
    type: type,
    position: 'bottom-right'
  })
}

export function signup(phone, email, username, studentid, realname, pass, sex, description, valid) {
  console.log(valid)
  if (valid) {
    var regform = {
      phone: phone,
      email: email,
      username: username,
      studentid: studentid,
      realname: realname,
      sex: sex,
      description: description,
      password: md5(pass),
      usertype: 'user'
    }
    console.log(JSON.stringify(regform))
  } else {
    toast('注册失败', '请检查填写内容是否正确', 'error')
  }
  // do axios
}
