<template>
    <div class="container" style="background: pink;">
        <h1>Comments</h1>
        <span class="fs-4"><router-link to="/">Home Page</router-link></span>
        <div class="card mb-3" style="background: aliceblue;">
        <div class="row" v-if="post">
          <!-- Thumbnails -->
          <div class="col-md-3">
              <b-img thumbnail rounded left :src="post.thumbnail" :height="post.thumbnail_ht" :width="post.thumbnail_wd"
              onerror="this.src='https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg'"> </b-img>
          </div>
          <!-- Upvote and Downvote -->
          <!-- <div class="col-md-1">
            <div class="card-body"><b-icon icon="file-arrow-up" font-scale="2" class="updown" title="Up Vote" :class="{'not-clicked': isLoading, 'is-clickedUp': !isLoading }" @click.once="changeBgUp(); showUp(post);"> </b-icon> </div>
            <div class="card-body"><p class="card-text">{{post.scores}}</p></div>
            <div class="card-body"><b-icon icon="file-arrow-down" font-scale="2" class="updown" title="Down Vote" :class="{'not-clicked': !isClicked, 'is-clickedDown': isClicked }" @click.once="changeBgDown(); showDown(post);"> </b-icon></div>
          </div> -->
          <!-- Title, subreddit name and authorname -->
          <div class="col-md-8">
          <div class="card-body">
              <p class="card-text"><a :href="post.link" target="blank" class="fs-5 link-primary"> {{post.title}}</a></p>
              <p class="card-text">
                <small>
                  <router-link :to="{name: 'subreddit', params: { subredditId:post.subreddit}}"> <span class="subredt fs-6"> Sub-Reddit @{{post.subreddit}}</span> </router-link> 
                  <!-- <span class="bg-info"> Sub-Reddit @{{subreddit[index]}}</span> -->
                  <span class="authors fs-6"> Author name:{{post.authors}}</span>
                </small>
              </p>
          </div>
          </div>
          <div>
            <ol>
              <h4>Comments</h4>
              <li v-for="(comment, index) in comments" :key="index">
                <div class="row">
                  <div class="col-md-1">
                    <div class="card-body"><b-icon icon="file-arrow-up" font-scale="2"> </b-icon> </div>
                    <div class="card-body"><p class="card-text">211</p></div>
                    <div class="card-body"><b-icon icon="file-arrow-down" font-scale="2"> </b-icon></div>
                  </div>
                  <div class="col-md-10">{{comment}}</div>
                </div>
              </li>
            </ol>
          </div>
        </div>
    </div>
    </div>
</template>


<script>
import snoo from '@/snoowrapApi.js'
export default {
    name: 'Comments',
    data(){
        return {
            post:{},
            comments:[]
        };
    },
    methods:{
      kFormatter(num){
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
      }
    },
   mounted(){
    snoo.getContentByIds([snoo.getSubmission(this.$route.params.cmntId)]).map(post => (console.log(post),
    {"title":post.title,"authors":post.author.name,
      "subreddit":post.subreddit.display_name,"link":post.url_overridden_by_dest,
      "thumbnail":post.thumbnail,"thumbnail_ht":post.thumbnail_height,"thumbnail_wd":post.thumbnail_width,
      "scores":this.kFormatter(post.score)}))
        .then(post=>{
          console.log(post)
          return this.post = post[0]
        });
    snoo.getSubmission(this.$route.params.cmntId).expandReplies({limit: 0, depth: 0}).then(c => {
      c.comments.forEach(x => {
        console.log(x.id)
        this.comments.push(x.body)
      })
    })
   }
}
</script>
<style scoped>
li{
  list-style: none;
  border: 2px dotted;
  padding: 5px;
  margin: 5px auto;
}
</style>