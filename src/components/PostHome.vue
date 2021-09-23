<template>
  <ol class="list-group list-group-numbered">
    <postsComponent v-for="(post, index) in posts" :key="index" :post="post" class="list-group-item list-group-item-action fs-6"></postsComponent>
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
        snoo.getHot().map(post => ({"title":post.title, "authors":post.author.name,"subreddit":post.subreddit.display_name}))
          .then(posts=>{
            return this.posts = posts
          });
      }
  }
</script>
<style>
postsComponent{
  text-align: left !important;
  padding: 5px !important;
  margin-left:10px;
}
</style>
