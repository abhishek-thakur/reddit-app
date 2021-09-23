<template>
	<li class="list-group-item list-group-item-action fs-6">
    {{post.title}} 
    <router-link :to="{name: 'subreddit', params: { subredditId:post.subreddit}}"> <span> Sub-Reddit @{{post.subreddit}}</span> </router-link> 
    <!-- <span class="bg-info"> Sub-Reddit @{{subreddit[index]}}</span> -->
    <span class="bg-warning"> Author name:{{post.authors}}</span>
  </li>
</template>
 
<script>
	export default{
		name: 'PostsComponent',
    props:['post']
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