<script setup>
import Account from '../components/Account.vue'
import { useACMBBSStore } from '@/store'
import { toast } from '@/js/toast'
import $ from 'jquery'

const store = useACMBBSStore()
const data = {
  UserId: store.userid
}
var accarr = ''

console.log(JSON.stringify(data))
console.log(store.userid)

$.ajax({
  type: 'POST',
  async: false,
  url: 'https://bbs.liruinian.top/api/getUserInfo',
  dataType: 'json',
  data: JSON.stringify(data),
  contentType: 'application/json',
  success: function (result) {
    console.log(result)
    if (result.status != 2000) {
      toast('获取用户信息失败', result.message, 'error')
    } else {
      accarr = result.data
      console.log(accarr)
    }
  }
})
</script>

<template>
  <main>
    <Account
      :uid="accarr.id"
      :username="accarr.username"
      :studentid="accarr.StudentId"
      :realname="accarr.realname"
      :sex="accarr.sex"
      :description="accarr.introduction"
    />
  </main>
  <!-- :regdate=accarr.userRegDate -->
  <!-- :point=accarr.userPoint
        :birthdate=accarr.userBirthday -->
</template>
