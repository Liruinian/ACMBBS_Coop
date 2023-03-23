<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Account from '../components/Account.vue'
import { useACMBBSStore } from '@/store'
import $ from 'jquery'
const store = useACMBBSStore()

$.ajax({
      type: 'POST',
      url: 'http://43.143.195.225:8080/api/getUserinfo',
      header:{
        'session': store.session
      },
      dataType: 'json',
      contentType: 'application/json',
      success: function (result) {
        console.log(result)
        const accarr = JSON.parse(accjson)
        console.log(accarr)
      }
    })


</script>

<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Account
        :uid = accarr.id
        :phone=accarr.phone
        :email=accarr.email
        :username=accarr.username
        :studentid=accarr.studentid
        :realname=accarr.realname
        :sex=accarr.sex
        :description=accarr.introduction
        />
    </main>
    <!-- :regdate=accarr.userRegDate -->
    <!-- :point=accarr.userPoint
        :birthdate=accarr.userBirthday -->
    <footer>
      <Footer />
    </footer>
  </div>
</template>
