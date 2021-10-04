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
    methods:{
      kFormatter(num){
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
      },
      // addUpvote(){
      //   snoo.getSubmission(this.id).upvote()
      // },
      // addDownvote(){
      //   snoo.getSubmission(this.id).downvote()
      // }
    },
    mounted(){
      snoo.getHot().map(post => (console.log(post),
        {"title":post.title, "authors":post.author.name,"id":post.id,
        "subreddit":post.subreddit.display_name,"link":post.url_overridden_by_dest,
        "thumbnail":post.thumbnail,"thumbnail_ht":post.thumbnail_height,"thumbnail_wd":post.thumbnail_width,
        "scores":this.kFormatter(post.score)}))
        .then(posts=>{
          return this.posts = posts
        });
        this.$on('addUpvote', (id)=>{
           snoo.getSubmission(id).upvote().then(res=>{
             console.log(res);
           });
           alert("voted up");
           //console.log(this.posts);
        });
        this.$on('addDownvote', (id)=> {
          snoo.getSubmission(id).downvote().then(res=>{
              console.log(res);
           });
          alert("voted down");
           console.log(this.posts);
        })
    }
  }
</script>

