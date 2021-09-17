<template>
  <div>
    <!-- <button type="button" class="btn btn-primary" @click.once="showPosts">Primary</button> -->
    <ol class="list-group list-group-numbered">
      <li v-for="title in titles" v-bind:key="title" class="list-group-item list-group-item-action fs-6">{{title}}</li>
    </ol>
  </div>
  
</template>

<script>
import snoo from '@/snoowrapApi.js'

export default {
  name: 'PostTitle',
  data () {
    return {
      titles:""
    };
  },
  created(){
    snoo.getHot().map(post => post.title)
      .then(titleOfPost=>{
        return this.titles = titleOfPost
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
</style>