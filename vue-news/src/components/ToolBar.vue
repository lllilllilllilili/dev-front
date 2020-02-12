<template>
  <div class ="header">
      <router-link to="/news">News</router-link> |
      <!--앵커 태그 형성 된다. -->
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link> |
      <router-link to="/item">item</router-link> |
      <router-link to="/user">user</router-link> |
      <router-link to="/test">test</router-link> | 
      <router-link to="/feedPage">feedPage</router-link> |
      <router-link to="/menubar">menubar</router-link> |
      <router-link to="/hashtagSearch">hashtagSearch</router-link> |
      <router-link to="/sticky">sticky</router-link> | 
      <router-link to="/title">title</router-link> | <br>
      <router-link to="/side">side</router-link> |
      <router-link to="/grid">grid</router-link> | 
      <router-link to="/userRankList">userRankList</router-link> | 
      <router-link to="/userRanking">userRanking</router-link> |
      <router-link to="/userRankListDetail">userRankListDetail</router-link> |
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
    /* display: flex; */
    width : 100%;
    
    max-width: 1000px;
    /* margin: 30px auto; */

}

.header .router-link-exact-active{
    color : #35495e;

}

.header a {
  color : white;
}

</style>

<style scoped>
  /* body{
    padding : 0;
    margin: 0;
  } */
body {
    /* padding: 3%; */
    background-color: #ccc;
    font-size: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
}
</style>