<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Account from '../components/Account.vue'

const accjson = "{\"uID\":1,\"userName\":\"tim\",\"userStudentId\":\"A19220064\",\"userSex\":\"unknown\",\"userEmail\":\"2941330150@qq.com\",\"userBirthday\":\"2004-02-25T00:00:00+08:00\",\"userClass\":0,\"userStatement\":\"这个人很神秘，没有留下个人简介...\",\"userRegDate\":\"2023-03-23T00:00:00+08:00\",\"userPoint\":0}"

const accarr = JSON.parse(accjson)
console.log(accarr)
</script>

<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Account
        :uid = accarr.uID
        :phone=accarr.phone
        :email=accarr.userEmail
        :username=accarr.userName
        :studentid=accarr.userStudentId
        :realname=accarr.realname
        :sex=accarr.userSex
        :description=accarr.userStatement
        :regdate=accarr.userRegDate
        :point=accarr.userPoint
        :birthdate=accarr.userBirthday
        />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
