export function signup() {
  let phone = document.getElementById('phonenum').value
  let email = document.getElementById('email').value
  let name = document.getElementById('name').value
  let password = document.getElementById('password').value
  let p_reminder = document.getElementById('pass_reminder')
  let p_test = /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/
  let em_test = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/

  if (phone == '' || email == '' || password == '') {
    alert('手机号，邮箱或密码不能为空')
    loader.style.display = 'none'
    return false
  }
  if (!p_test.test(phone)) {
    document.getElementById('phonenum').value = ''
    document.getElementById('phonenum').placeholder = '手机号格式不正确'
  }
  if (!em_test.test(email)) {
    document.getElementById('email').value = ''
    document.getElementById('email').placeholder = '邮箱格式不正确'
  }
  if (p_test.test(phone) && em_test.test(email) && !p_reminder.classList.contains('error')) {
    var regform = {
      phone: phone,
      email: email,
      username: name,
      password: password,
      usertype: 'user'
    }
    console.log(JSON.stringify(regform))
  }
  // do axios
}
