<template>
  <div class="bg-info bg-gradient">
    <h1>HOME</h1>
    <ol class="container list-group">
      <postsComponent v-for="(post, index) in posts" :key="index" :post="post"></postsComponent>
    </ol>
  </div>
  
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
        snoo.getHot().map(post => (console.log(post),
          {"title":post.title, "authors":post.author.name,
          "subreddit":post.subreddit.display_name,"link":post.url_overridden_by_dest
          ,"thumbnail":post.thumbnail,"thumbnail_ht":post.thumbnail_height,"thumbnail_wd":post.thumbnail_width}))
          .then(posts=>{
            return this.posts = posts
          });
      }
  }
</script>

