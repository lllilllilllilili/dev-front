<template>
  <div>
    <p>
      name : 
      {{userInfo.id}}
    </p>
    <p>
      karma : 
      {{userInfo.karma}}
    </p>
    <p>
      created : 
      {{userInfo.created}}
    </p>
   
  </div>
</template>

<script>
//import axios from 'axios'
export default {
 computed:{
    userInfo(){
      return this.$store.state.user;
    }//userInfo 에서 template 에서 만들 수 있다.
 },
 created(){
   // eslint-disable-next-line no-console
   //console.log(this.$route.params.id);
   const userName = this.$route.params.id;
   //axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
  this.$store.dispatch('FETCH_USER', userName);
 },
 
}
</script>

<style>

</style>