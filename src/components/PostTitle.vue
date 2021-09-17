<template>
  <div>
    <!-- <button type="button" class="btn btn-primary" @click.once="showPosts">Primary</button> -->
    <ol class="list-group list-group-numbered">
      <li v-for="(title, index) in titles" :key="title" class="list-group-item list-group-item-action fs-6">{{title}} 
        <span class="bg-info"> Sub-Reddit @{{subreddit[index]}}</span>
        <span class="bg-warning"> Author name:{{authors[index]}}</span>
      </li>
      
    </ol>
  </div>
  
</template>

<script>
import snoo from '@/snoowrapApi.js'

export default {
  name: 'PostTitle',
  data () {
    return {
      titles:"",
      authors:"",
      subreddit:""
    };
  },
  created(){
    snoo.getHot().map(post => post.title)
      .then(titleOfPost=>{
        return this.titles = titleOfPost  
      });
      snoo.getHot().map(post => post.author.name)
      .then(authorOfPost =>{
        return this.authors = authorOfPost
      });
      snoo.getHot().map(post => post.subreddit.display_name)
      .then(sbrOfPost =>{
        return this.subreddit = sbrOfPost
      })
  }
  // methods: {
    
  //   showPosts () {
  //     r.getHot().map(post => post.title)
  //     .then(titleOfPost=>{
  //       return this.titles = titleOfPost;
  //     });
      
  //   } 
  // }
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