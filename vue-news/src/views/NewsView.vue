<template>
  <div>
    <!-- <div v-for="user in this.$store.state.news" v-bind:key="user">
      {{user.title}}
      </div> -->
      <p v-for="user in this.$store.state.news" v-bind:key="user">
        <a v-bind:href ="user.url">

          {{user.title}}</a>
          <small>{{user.user}}</small>
          <small>
            {{user.time_ago}} by
            <router-link :to ="`/user/${user.user}`">{{user.user}}</router-link> 
          </small>
      </p>
  </div>
</template>

<script>
/*eslint-disable*/
//import {fetchNewsList} from '../api/index.js';
export default {
  // data(){
  //   return {
  //     users : []
  //   }
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS');

    // eslint-disable-next-line no-console
    //console.log('호출 전 : ', this); //vueComponent 
    //1. 
    // fetchNewsList()
    //  .then(response =>{
    //     // eslint-disable-next-line no-console
    //     console.log('호출 후 : ',this); //undefined
    //      // eslint-disable-next-line no-console
    //     console.log(response);
    //     //2. 
    //     vm.users = response.data; //바인딩 
    //   })
    //   .catch(function(error){
    //     // eslint-disable-next-line no-console
    //     console.log(error);
    //   })
  },
}
</script>

<style>

</style>