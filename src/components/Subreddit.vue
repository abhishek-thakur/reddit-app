<template>
  <div>
    <h1>Sub-Reddit @{{subreddit}}</h1> 
    <span><router-link to="/">Home Page</router-link></span>
    <ol class="list-group list-group-numbered">
    <postsComponent v-for="(post, index) in posts" :key="index" :post="post" class="list-group-item list-group-item-action fs-6"></postsComponent>
  </ol>
  </div>
</template> 

<script>
  import snoo from '@/snoowrapApi.js'
  import PostsComponent from './PostsComponent.vue';
  export default{
    name: 'Subreddit',
    components: { 
    PostsComponent 
    },
    data () {
      return {
        posts:[]
      };
    },
    computed: {
      subreddit () {
        console.log(this.$route.params.subredditId);
        return this.$route.params.subredditId;
      }
    },
    mounted(){
      snoo.getSubreddit(this.$route.params.subredditId).getHot().map(post => ({"title":post.title, "authors":post.author.name,"subreddit":post.subreddit.display_name}))
        .then(posts=>{
          console.log(posts)
          return this.posts = posts
        });
    }
  }
</script>


<style>
li{
  text-align: left !important;
  padding: 5px !important;
  margin-left:10px;
}
span{
  margin-left:20px;
  font-weight: bold;
}
</style>