<template>
  <div>
    <h1>Sub-Reddit @{{subreddit}}</h1>
    <postsComponent></postsComponent>
  </div>
</template>

<script>
//  import snoo from '@/snoowrapApi.js'
  import PostsComponent from './PostsComponent.vue';
  export default{
  components: { PostsComponent },
    name: 'SubredditComponent',
    computed: {
      subreddit () {
        console.log(this.$route.params.subredditId);
        return this.$route.params.subredditId;
      }
    }
  }
</script>
