<script setup>
import Section from './SectionSelect.vue'
</script>
<script>
export default {
  props: {
    postarr: Array,
    devicetype: String
  }
}
</script>
<template>
  <div class="all_section container">
    <div class="boldtext"><i class="fa fa-book"></i> 所有板块</div>
    <div class="sections">
      <Section
        v-for="post in postarr"
        :section_title="post.Section"
        :section_logo="post.icon"
        :section_id="post.id"
        :section_href="'/section/' + post.id"
        :post="post"
        :devicetype="devicetype"
      />
    </div>
  </div>
</template>

<style scoped>
.sections {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
}
</style>
