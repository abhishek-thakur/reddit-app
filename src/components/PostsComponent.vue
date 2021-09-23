<template>
	<div id="postComponent">
    {{post.title}} 
    <router-link :to="{name: 'subreddit', params: { subredditId:post.subreddit}}"> <span> Sub-Reddit @{{post.subreddit}}</span> </router-link> 
    <!-- <span class="bg-info"> Sub-Reddit @{{subreddit[index]}}</span> -->
    <span class="bg-warning"> Author name:{{post.authors}}</span>
  </div>
</template>
 
<script>
	export default{
		name: 'PostsComponent',
    props:['post']
}
</script>
<style>
span{
  margin-left:20px;
  font-weight: bold;
}
#postComponent{
  text-align: left !important;
  padding: 5px !important;
  margin-left:10px;
}
</style>