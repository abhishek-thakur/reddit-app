<template>
	<li class="list-group-item list-group-item-action">
    <div class="card mb-3" style="background: aliceblue;">
        <div class="row">
            <div class="col-md-4">
                <b-img thumbnail rounded left :src="post.thumbnail" :height="post.thumbnail_ht" :width="post.thumbnail_wd"
                onerror="this.src='https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'"> </b-img>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <p class="card-text"><a :href="post.link" target="blank" class="fs-5 link-primary"> {{post.title}}</a></p>
                <p class="card-text"><small><router-link :to="{name: 'subreddit', params: { subredditId:post.subreddit}}"> <span class="subredt fs-6"> Sub-Reddit @{{post.subreddit}}</span> </router-link> 
                    <!-- <span class="bg-info"> Sub-Reddit @{{subreddit[index]}}</span> -->
                    <span class="authors fs-6"> Author name:{{post.authors}}</span></small></p>
            </div>
            </div>
        </div>
    </div>
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
  /* height: 170px !important; */
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
</style>