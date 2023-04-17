import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useACMBBSStore = defineStore('ACMBBSStore', {
  state: () => ({
    posts: useLocalStorage('posts', null),
    deviceType: useLocalStorage('deviceType', null),
    userid: useLocalStorage('userid', 0),
    logged: useLocalStorage('logged', false),
    username: useLocalStorage('username', '未登录用户')
  })
})
