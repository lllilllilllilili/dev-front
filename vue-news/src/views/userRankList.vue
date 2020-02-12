<template>
<div class="wrap">
  <div class="ele2">
    <div class="vertical-menu">
      <a href="#">최신 순 보기</a>
      <a href="#">팔로워만 보기</a>
      <a href="#">맨 위로</a>
    </div>
</div>
</div>
</template>

<script>

export default {
    
}
</script>

<style scorped>

.wrap {
  position: absolute;
  width: 100%;
  height: 1000px;

}

  .ele2 {
  display: inline-block;
  position: sticky;
  top: 130px;
  background: blue;
}

.vertical-menu {
  width: 200px; /* Set a width if you like */
}

.vertical-menu a {
  background-color: #eee; /* Grey background color */
  color: black; /* Black text color */
  display: block; /* Make the links appear below each other */
  padding: 12px; /* Add some padding */
  text-decoration: none; /* Remove underline from links */
}

.vertical-menu a:hover {
  background-color: yellowgreen; /* Dark grey background on mouse-over */
}

.vertical-menu a.active {
  background-color: #4CAF50; /* Add a green color to the "active/current" link */
  color: white;
}
</style>