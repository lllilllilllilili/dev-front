<template>
  <div>
    <div v-for="user in users" v-bind:key="user">{{user.title}}</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      users : []
    }
  },
  created() {
    var vm = this;
    axios.get('https://api.hnpwa.com/v0/news/1.json')
      .then(function(response){
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