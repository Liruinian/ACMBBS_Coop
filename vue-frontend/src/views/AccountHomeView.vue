<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Account from '../components/Account.vue'

const accjson = `
  {
    "phone": "15765505517",
    "email": "2941330150@qq.com",
    "username":"Tim_LRN2016",
        "studentid":"A19220064",
        "realname":"李睿年",
        "sex": "male",
        "description": "hello vue?"
  }
`

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
        :phone=accarr.phone
        :email=accarr.email
        :username=accarr.username
        :studentid=accarr.studentid
        :realname=accarr.realname
        :sex=accarr.sex
        :description=accarr.description
        />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
