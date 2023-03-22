<script setup>
import Section from './SectionSelect.vue'
</script>
<script>
export default {
  props: {
    postarr: Array,
  }
}
</script>
<template>
  <div class="all_section container">
    <div class="boldtext"><i class="fa fa-book"></i> 所有板块</div>
    <div class="sections">
      <Section
        :section_title="postarr[0].section"
        section_logo="fa fa-3x fa-area-chart"
        section_id="0"
        :post="postarr[0]"
      />
      <Section
        :section_title="postarr[1].section"
        section_logo="fa fa-3x fa-child"
        section_id="1"
        :post="postarr[1]"
      />
      <Section
        :section_title="postarr[2].section"
        section_logo="fa fa-3x fa-file-text"
        section_id="2"
        :post="postarr[2]"
      />
      <Section
        :section_title="postarr[3].section"
        section_logo="fa fa-3x fa-cutlery"
        section_id="3"
        :post="postarr[3]"
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
