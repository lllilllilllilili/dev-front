<template>
  <div>
  

  <p v-for="user in this.$store.state.jobs" v-bind:key="user">
        <a :href ="user.url">

          {{user.title}}</a>
          <small>{{user.domain}}</small>
          <small>{{user.time_ago}} by {{user.user}}</small>
      </p>
  </div>
</template>

<script>
//import {fetchJobsList} from '../api/index.js';
export default {
  data(){
    return {
      users : []
    }
  },
  created(){
    this.$store.dispatch('FETCH_JOBS');
  },
}
</script>

<style>

</style>