import $ from 'jquery'
import md5 from 'blueimp-md5'
import { ElNotification } from 'element-plus'

function toast(title, message, type) {
  ElNotification({
    title: title,
    message: message,
    type: type,
    position: 'bottom-right'
  })
}

$.ajax({
  type: 'GET',
  url: 'https://bbsdev.liruinian.top/api/',
  dataType: 'json',
  success: function (result) {
    console.log(result)
  }
})

export function login(account, password) {
  let p_test = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
  let em_test = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/

  if (account == '' || password == '') {
    toast('登录失败', '手机号，邮箱或密码不能为空', 'error')
    // alert('手机号，邮箱或密码不能为空')
    return false
  }

  if (password.length >= 6) {
    let login_type = 0
    if (p_test.test(account)) {
      login_type = 1
    } else if (em_test.test(account)) {
      login_type = 2
    } else {
      login_type = 3
    }

    let jsondata = JSON.stringify({
      user: account,
      password: md5(password),
      logintype: login_type
    })
    $.ajax({
      type: 'POST',
      url: 'http://43.143.195.225:8080/api/login',
      // url: 'https://bbsdev.liruinian.top/api/user/login',
      data: jsondata,
      dataType: 'json',
      contentType: 'application/json',
      success: function (result) {
        if (result.status !== 2000) {
          toast('登录失败', result.message, 'error')
        } else {
          toast('权限已核实', '正在为您登录...', 'success')
        }
      }
    })
  }
}

function signupjump() {}
