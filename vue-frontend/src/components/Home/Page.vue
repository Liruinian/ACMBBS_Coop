<script setup>
import Banner from './Banner.vue'
import HotTopic from './HotTopic.vue'
import AllSection from './AllSection.vue'
import { useACMBBSStore } from '@/store'

const store = useACMBBSStore()
const postarr = store.posts
</script>
<template>
  <Banner :logged="store.logged" :username="store.username" />
  <HotTopic />
  <AllSection :postarr="postarr" />
</template>
