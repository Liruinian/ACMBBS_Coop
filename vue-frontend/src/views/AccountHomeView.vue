<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Account from '../components/Account.vue'
</script>

<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Account
        phone="15765505517"
        email="2941330150@qq.com"
        username="Tim_LRN2016"
        studentid="A19220064"
        realname="李睿年"
      >
        <template #email> email </template>
      </Account>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
