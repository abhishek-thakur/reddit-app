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
	export default{
		name: 'PostsComponent',
    props:['posts']
}
</script>