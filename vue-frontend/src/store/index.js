import { defineStore } from 'pinia'
export const useACMBBSStore = defineStore('ACMBBSStore', () => {
  var posts = ''
  var session = ''
  const logged = false
  const username = '未登录用户'
  return { posts, logged, username, session }
})
