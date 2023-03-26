<script setup>
import Post from '@/components/Post.vue'
</script>
<template>
  {{ $route.params.name }}
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
