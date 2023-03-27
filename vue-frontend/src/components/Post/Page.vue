<script setup>
import $ from 'jquery'
const props = defineProps(['id'])
var post = ""
var data = {
  postId: parseInt(props.id)
}
var jsondata = JSON.stringify(data)
console.log(jsondata)
$.ajax({
  type: 'POST',
  url: 'https://bbs.liruinian.top/api/postDetail',
  async: false,
  data: jsondata,
  success: function (result) {
    console.log(result)
    var jsonParsed = JSON.parse(result)
    post = jsonParsed.data
  }
})
</script>
<template>
  {{ post }}
</template>
