<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Post from '../components/Post/Page.vue'
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
      <Post :id="props.id" :key="key" />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
