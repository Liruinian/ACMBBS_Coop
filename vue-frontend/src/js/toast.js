import { ElNotification } from 'element-plus'

export function toast(title, message, type) {
  ElNotification({
    title: title,
    message: message,
    type: type,
    position: 'bottom-right'
  })
}
