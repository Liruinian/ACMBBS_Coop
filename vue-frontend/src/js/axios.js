import axios from 'axios'

const API = axios.create({
  baseUrl: 'https://bbs.liruinian.top/api/',
  timeout: 2000
})

export default API
