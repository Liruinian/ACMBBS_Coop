import md5 from 'blueimp-md5'
import { toast } from '@/js/toast'
import { useACMBBSStore } from '@/store'
import pinia from '@/store/createstore'
import API from '@/js/axios'
import cookies from 'vue-cookies'

const store = useACMBBSStore(pinia)

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
      username: account,
      password: md5(password),
      logintype: login_type
    })
    console.log(jsondata)
    const customConfig = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    API.post('login', jsondata, customConfig).then((response) => {
      var result = response.data
      console.log(result)
      if (result.status !== 2000) {
        toast('登录失败', result.message, 'error')
        store.logged = false
        store.username = '未登录用户'
        store.id = 0
      } else {
        toast('权限已核实', '正在为您登录...', 'success')
        store.logged = true
        store.username = result.data.username
        store.userid = result.data.UserId
        const serverReturnId = cookies.get('id')
        console.log(serverReturnId)
      }
    })
  }
}
