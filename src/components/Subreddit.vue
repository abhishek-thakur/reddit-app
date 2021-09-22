<template>
  <div>
    <h1>Sub-Reddit @{{subreddit}}</h1> <span><router-link to="/">Go to Home Page</router-link></span>
    <ol class="list-group list-group-numbered">
      <li v-for="(post, index) in posts" :key="index" class="list-group-item list-group-item-action fs-6">{{post.title}} 
        <!-- <router-link :to="{name: 'subreddit', params: { subredditId:post.subreddit}}"> <span> Sub-Reddit @{{post.subreddit}}</span> </router-link>  -->
        <!-- <span class="bg-info"> Sub-Reddit @{{subreddit[index]}}</span> -->
        <span class="bg-warning"> Author name:{{post.authors}}</span>
      </li>
  </ol>
  </div>
</template> 

<script>
  import snoo from '@/snoowrapApi.js'
  //import PostsComponent from './PostsComponent.vue';
  export default{
 // components: { PostsComponent },
    name: 'SubredditComponent',
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