<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Section from '../components/Section/Page.vue'
import { watch } from 'vue'

const props = defineProps(['id'])
var key = 0

watch(props, async (newId, oldId) => {
      key++
})

</script>

<template>
  <div>
    <header>
      <Header />
    </header>
    <main>
      <Section :id="props.id" :key="key" />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
