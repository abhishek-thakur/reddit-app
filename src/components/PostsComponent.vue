<template>
	<li class="list-group-item list-group-item-action">
    <div class="card mb-3" style="background: aliceblue;">
        <div class="row">
          <!-- Thumbnails -->
          <div class="col-md-3">
              <b-img thumbnail rounded left :src="post.thumbnail" :height="post.thumbnail_ht" :width="post.thumbnail_wd"
              onerror="this.src='https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'"> </b-img>
          </div>
          <!-- Upvote and Downvote -->
          <div class="col-md-1">
            <div class="card-body"><b-icon icon="file-arrow-up" font-scale="2" class="updown" title="Up Vote" :class="{'not-clicked': isLoading, 'is-clickedUp': !isLoading }" @click.once="changeBgUp(); showUp(post);"> </b-icon> </div>
            <div class="card-body"><p class="card-text">{{post.scores}}</p></div>
            <div class="card-body"><b-icon icon="file-arrow-down" font-scale="2" class="updown" title="Down Vote" :class="{'not-clicked': !isClicked, 'is-clickedDown': isClicked }" @click.once="changeBgDown(); showDown(post);"> </b-icon></div>
          </div>
          <!-- Title, subreddit name and authorname -->
          <div class="col-md-8">
          <div class="card-body">
              <p class="card-text"><a :href="post.link" target="blank" class="fs-5 link-primary"> {{post.title}}</a></p>
              <p class="card-text">
                <small>
                  <router-link :to="{name: 'subreddit', params: { subredditId:post.subreddit}}"> <span class="subredt fs-6"> Sub-Reddit @{{post.subreddit}}</span> </router-link> 
                  <!-- <span class="bg-info"> Sub-Reddit @{{subreddit[index]}}</span> -->
                  <span class="authors fs-6"> Author name:{{post.authors}}</span>
                  <div><router-link :to="{name: 'comments', params: { cmntId:post.id}}">Comments</router-link></div>
                </small>
              </p>
          </div>
          </div>
        </div>
    </div>
  </li>
</template>
 
<script>
	export default{
		name: 'PostsComponent',
    data(){
      return {
        isLoading : true,
        isClicked: false
        };
    },
    props:['post'],
    methods:{
      showUp(post){
        alert("clicked up");
        this.$emit('addUpvote',post.id);
      },
      showDown(post){
        alert("clicked down")
        this.$emit('addDownvote',post.id);
      },
      changeBgUp(){
        this.isLoading = !this.isLoading
      },
      changeBgDown(){
        this.isClicked = !this.isClicked
      }
    }
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
.updown{
  cursor: pointer;
}
.is-clickedUp{
  background: orangered;
}
.not-clicked{
  background: #fff;
}
.is-clickedDown{
  background: yellow;
}
</style>