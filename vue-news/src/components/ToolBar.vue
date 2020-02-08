<template>
  <div class ="header">
      <router-link to="/news">News</router-link> |
      <!--앵커 태그 형성 된다. -->
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
      <router-link to="/item">item</router-link> |
      <router-link to="/user">user</router-link> |
      <router-link to="/test">test</router-link>
      
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.header{
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}

.header .router-link-exact-active{
    color : #35495e;

}

.header a {
  color : white;
}

</style>

<style>
  body{
    padding : 0;
    margin: 0;
  }

</style>