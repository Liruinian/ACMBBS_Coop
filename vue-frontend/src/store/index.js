import { defineStore } from 'pinia'
export const useACMBBSStore = defineStore('ACMBBSStore', () => {
  const posts = `
  [
    {
      "id": 1,
      "section": "学术研讨",
      "icon": "fa fa-3x fa-area-chart",
      "title": "不定积分要+C吗？定积分不用+C吗？",
      "author": "学不会数学的菜狗不配拥有爱情",
      "tag": "#学术研讨 #数学 #简单题 #积分",
      "time": "2023.03.15 12:02:15"
    },
    {
      "id": 2,
      "section": "休闲娱乐",
      "icon": "fa fa-3x fa-child",
      "title": "咱学校南区是着火了吗？",
      "author": "哇塞这是什么",
      "tag": "#休闲娱乐 #东农日常 #水",
      "time": "2023.03.16 13:22:53"
    },
    {
      "id": 3,
      "section": "校园风情",
      "icon": "fa fa-3x fa-file-text",
      "title": "家人们，今天下雪了！",
      "author": "清水",
      "tag": "#校园风情 #东农日常 #美景",
      "time": "2023.03.15 15:31:46"
    },
    {
      "id": 4,
      "section": "吃在东农",
      "icon": "fa fa-3x fa-cutlery",
      "title": "学校南门外哪家店好吃啊？",
      "author": "饿了就要吃饭",
      "tag": "#吃在东农 #南门 #推荐",
      "time": "2023.03.16 17:12:42"
    }
  ]
  `
  const logged = false
  const username = '未登录用户'
  return { posts, logged, username }
})
