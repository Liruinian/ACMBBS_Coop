<script setup>
import Banner from './Banner.vue'
import HotTopic from './HotTopic.vue'
import AllSection from './AllSection.vue'
import { useACMBBSStore } from '@/store'

const store = useACMBBSStore()
const postarr = JSON.parse(store.posts).data
const devicetype = store.deviceType
</script>
<template>
  <Banner :logged="store.logged" :username="store.username" :devicetype="store.deviceType" />
  <HotTopic />
  <AllSection :postarr="postarr" :devicetype="devicetype" />
</template>
