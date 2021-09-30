<template>
	<li class="list-group-item list-group-item-action fs-6 d-flex w-100 justify-content-between">
    <span class="titleContainer justify-content-left"><a :href="post.link" target="blank" class="fs-6 link-primary"> {{post.title}}</a></span> 
    <b-img thumbnail rounded left :src="post.thumbnail" :height="post.thumbnail_ht" :width="post.thumbnail_wd"
    onerror="this.src='https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'"> </b-img>
    <!-- {{post.title}} -->
    <router-link :to="{name: 'subreddit', params: { subredditId:post.subreddit}}"> <span> Sub-Reddit @{{post.subreddit}}</span> </router-link> 
    <!-- <span class="bg-info"> Sub-Reddit @{{subreddit[index]}}</span> -->
    <span class="authors"> Author name:{{post.authors}}</span>
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
  height: 150px;
}
.authors, .subredt{
  width: 200px;
  font-weight: bold;
  margin-right: 5px;
}
a{
cursor: pointer;
text-decoration: none !important;
color: black;
margin-right: 10px;
}
img
{
width: 150px;
height: 150px;
}
.titleContainer{
  width: 570px;
}
</style>