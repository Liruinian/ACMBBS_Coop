<script setup>
import Section from '../components/Section/Page.vue'
import { watch } from 'vue'

const props = defineProps(['id'])
var key = 0

watch(props, async (newId, oldId) => {
  key++
})
</script>

<template>
  <Section :id="props.id" :key="key" />
</template>
