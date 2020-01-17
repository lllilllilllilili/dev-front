<template>
  <div>
    <div v-for ="user in users" v-bind:key="user">{{user.title}}</div>
  </div>
</template>

<script>
import {fetchAskList} from '../api/index.js';
export default {
  data(){
    return {
      users : []
    }
  },
  created(){
    
    fetchAskList()
    .then(response => this.users = response.data)
    .catch(error => 
    // eslint-disable-next-line no-console
    console.log(error));
  },
}
</script>

<style>

</style>