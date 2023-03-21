import $ from 'jquery'
import md5 from 'blueimp-md5'

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
    alert('手机号，邮箱或密码不能为空')
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

    $.ajax({
      type: 'POST',
      // url: "http://43.143.195.225:8080/web/login",
      url: 'https://bbsdev.liruinian.top/api/user/login',
      data: JSON.stringify({
        user: $('#user').val(),
        password: md5($('#password').val()),
        logintype: login_type
      }),
      dataType: 'json',
      success: function (result) {
        console.log(result)
      }
    })
  }
}

function signupjump() {}
