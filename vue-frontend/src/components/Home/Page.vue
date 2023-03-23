<script setup>
import Banner from './Banner.vue'
import HotTopic from './HotTopic.vue'
import AllSection from './AllSection.vue'
import { useACMBBSStore } from '@/store'
import $ from 'jquery'

const store = useACMBBSStore()
const postarr = JSON.parse(store.posts)

$.ajax({
  type: 'POST',
  url: 'http://localhost:8109/user/info',
  success: function (result) {
    console.log(result)
  }
})

</script>
<template>
  <Banner :logged="store.logged" :username="store.username"/>
  <HotTopic />
  <AllSection :postarr="postarr"/>
</template>
