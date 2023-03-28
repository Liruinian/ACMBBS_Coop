import { defineStore } from 'pinia'
export const useACMBBSStore = defineStore('ACMBBSStore', () => {
  var posts = ''
  var deviceType = ''
  var userid = 0
  const logged = false
  const username = '未登录用户'
  return { posts, logged, username, userid, deviceType }
})
