<script setup>
import Post from '../components/Post/Page.vue'
import { watch } from 'vue'

const props = defineProps(['id'])
var key = 0

watch(props, async (newId, oldId) => {
  key++
})
</script>

<template>
  <Post :id="props.id" :key="key" />
</template>
