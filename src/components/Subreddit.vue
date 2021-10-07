<template>
  <div class="bg-warning bg-gradient">
    <h1>Sub-Reddit @{{subreddit}}</h1> 
    <span class="fs-4"><router-link to="/">Home Page</router-link></span>
    <ol class="container list-group">
    <postsComponent v-for="(post, index) in posts" :key="index" :post="post" class="list-group-item list-group-item-action fs-6" v-on:addUpvote="addUpvote" v-on:addDownvote="addDownvote"></postsComponent>
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
      subreddit() {
        console.log(this.$route.params.subredditId);
        return this.$route.params.subredditId;
      }
    },
    methods:{
      kFormatter(num){
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
      },
      addUpvote(id){
        console.log("from parent")
        snoo.getSubmission(id).upvote().then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
      },
      addDownvote(id){
        snoo.getSubmission(id).downvote().then(res=>{
          console.log(res);
        }).catch(err=>{
          console.log(err);
        })
      }
    },
    mounted(){
      snoo.getSubreddit(this.$route.params.subredditId).getHot().map(post => (console.log(post),
      {"title":post.title,"authors":post.author.name,"id":post.id,
      "subreddit":post.subreddit.display_name,"link":post.url_overridden_by_dest,
      "thumbnail":post.thumbnail,"thumbnail_ht":post.thumbnail_height,"thumbnail_wd":post.thumbnail_width,
      "scores":this.kFormatter(post.score)}))
        .then(posts=>{
          console.log(posts)
          return this.posts = posts
        });
        // this.$on('addUpvote', (id)=>{
        //    snoo.getSubmission(id).upvote().then(res=>{
        //      console.log(res);
        //    }).catch(error=>{
        //      console.log(error);
        //    });
        //    alert("voted up");
        //    //console.log(this.posts);
        // });
        // this.$on('addDownvote', (id)=> {
        //   snoo.getSubmission(id).downvote().then(res=>{
        //       console.log(res);
        //    }).catch(error=>{
        //      console.log(error);
        //    });
        //   alert("voted down");
        //    console.log(this.posts);
        // })
    }
  }
</script>
