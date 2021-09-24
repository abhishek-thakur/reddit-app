<template>
  <ol class="list-group list-group-numbered">
    <postsComponent v-for="(post, index) in posts" :key="index" :post="post"></postsComponent>
  </ol>
</template>

<script> 
  import PostsComponent from './PostsComponent.vue';
  import snoo from '@/snoowrapApi.js'
  export default {
    name: 'PostHome',
    components:{
      PostsComponent
    },
    data () {
        return {
          posts:[]
        };
      },
      mounted(){
        snoo.getHot().map(post => (console.log(post.permalink),
          {"title":post.title, "authors":post.author.name,"subreddit":post.subreddit.display_name,"link":post.permalink}))
          .then(posts=>{
            return this.posts = posts
          });
      }
  }
</script>

