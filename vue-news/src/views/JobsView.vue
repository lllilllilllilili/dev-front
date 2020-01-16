<template>
  <div>
      <div v-for="user in users" v-bind:key="user">{{user.title}}</div>
  </div>
</template>

<script>
import {fetchJobsList} from '../api/index.js';
export default {
  data(){
    return {
      users : []
    }
  },
  created(){
    var vm = this;
    fetchJobsList()
    .then(function(response){
      
        // eslint-disable-next-line no-console
      console.log(response);
      vm.users = response.data;
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