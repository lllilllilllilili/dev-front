<template>
  <div>
    <div v-for="user in users" v-bind:key="user">{{user.title}}</div>
  </div>
</template>

<script>

import {fetchNewsList} from '../api/index.js';
export default {
  data(){
    return {
      users : []
    }
  },
  created() {
    var vm = this;
     // eslint-disable-next-line no-console
    console.log('호출 전 : ', this); //vueComponent 
    fetchNewsList()
     .then(response =>{
        // eslint-disable-next-line no-console
        console.log('호출 후 : ',this); //undefined
         // eslint-disable-next-line no-console
        console.log(response);
        vm.users = response.data; //바인딩 
      })
      .catch(function(error){
        // eslint-disable-next-line no-console
        console.log(error);
      })
  },
}
</script>

<style>

</style>