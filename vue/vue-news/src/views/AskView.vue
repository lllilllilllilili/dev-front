<template>
  <div>
  

  <p v-for="user in fetchedAsk" v-bind:key="user">
        <!-- <a :href ="user.url">
          {{user.title}}</a> -->
        <router-link :to ="`/item/${user.id}`">{{user.title}}</router-link>
          <small>{{user.domain}}</small>
          <small>{{user.time_ago}} by {{user.user}}</small>
      </p>
  </div>
</template>

<script>
//import {fetchAskList} from '../api/index.js';
/*eslint-disable*/
import {mapState, mapGetters } from 'vuex';

export default {
  computed :{ 
    //# 3.
    // ...mapGetters({//...은 풀어써준다.
    //   askItems : 'fetchedAsk'
    // }), //-> 바로 쓰고 싶다면
  
    ...mapGetters([
      'fetchedAsk'
    ]),

    //# 2.
    // ...mapState({
    //   ask: state => state.ask
    // })
    
    //# 1.
    // ask(){
    //   return this.$store.state.ask;
    // }
  },
  created(){
    this.$store.dispatch('FETCH_ASK');
    
  },
}
</script>

<style>

</style>