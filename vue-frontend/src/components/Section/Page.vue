<script setup>
import { useRoute } from 'vue-router';
import Post from '@/components/Post.vue'
const route = useRoute()
</script>
<template>
{{ route.params.name }}
<div class="container">
    <Post 
        post_title="post.titleaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        post_author="post.author"
        post_tag="post.tag"
        post_time="post.time"
/>
</div>
<div class="container">
    <Post 
        post_title="post.title"
        post_author="post.author"
        post_tag="post.tag"
        post_time="post.time"
/>
</div>
<div class="container">
    <Post 
        post_title="post.title"
        post_author="post.author"
        post_tag="post.tag"
        post_time="post.time"
/>
</div>
<div class="container">
    <Post 
        post_title="post.title"
        post_author="post.author"
        post_tag="post.tag"
        post_time="post.time"
/>
</div>
<div class="container">
    <Post 
        post_title="post.title"
        post_author="post.author"
        post_tag="post.tag"
        post_time="post.time"
/>
</div>
<!-- TODO: v-for -->
</template>
