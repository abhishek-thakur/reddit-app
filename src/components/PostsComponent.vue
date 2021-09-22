<template>
	<div>
    <ol class="list-group list-group-numbered">
      <li v-for="(post, index) in posts" :key="index" class="list-group-item list-group-item-action fs-6">{{post.title}} 
        <router-link :to="{name: 'subreddit', params: { subredditId:post.subreddit}}"> <span> Sub-Reddit @{{post.subreddit}}</span> </router-link> 
        <!-- <span class="bg-info"> Sub-Reddit @{{subreddit[index]}}</span> -->
        <span class="bg-warning"> Author name:{{post.authors}}</span>
      </li>
  </ol>
  </div>
</template>

<script>
  import snoo from '@/snoowrapApi.js'
	export default{
		name: 'PostsComponent',
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