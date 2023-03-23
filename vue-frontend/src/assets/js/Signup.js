import { ElNotification } from 'element-plus'
import md5 from 'blueimp-md5'
import $ from 'jquery'

function toast(title, message, type) {
  ElNotification({
    title: title,
    message: message,
    type: type,
    position: 'bottom-right'
  })
}

export function signup(
  phone,
  email,
  username,
  studentid,
  realname,
  pass,
  sex,
  birthdate,
  statement,
  valid
) {
  console.log(valid)
  if (valid) {
    var regform = {
      phone: phone,
      email: email,
      username: username,
      StudentId: studentid,
      realname: realname,
      sex: sex,
      introduction: statement,
      birthday: birthdate,
      password: md5(pass)
    }
    $.ajax({
      type: 'POST',
      url: 'http://43.143.195.225:8080/api/register',
      data: JSON.stringify(regform),
      dataType: 'json',
      contentType: 'application/json',
      success: function (result) {
        if (result.status !== 2000) {
          toast('注册失败', result.message, 'error')
        } else {
          toast('权限已核实', '注册成功', 'success')
        }
      }
    })
  } else {
    toast('注册失败', '请检查填写内容是否正确', 'error')
  }
  // do axios
}
