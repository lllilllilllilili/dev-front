<template>
    <div>
<div class="wrapper">
  <div class="main">
    <h2>Main content</h2>
    <p>Scroll down the page!</p>
    <h3>How to recreate this</h3>
    
      Position the columns with flex. Then apply two lines of CSS to the sidebar to make it sticky:
      <pre>
.sidebar {
  position: sticky;
  top: 0;
}
    </pre>
    Include <code>position: -webkit-sticky;</code> for Safari.
    
  </div>

  <div class="sidebar">
    <h3>Sticky sidebar</h3>
    <p>I will follow you!</p>
    <p><a href="https://caniuse.com/#search=sticky">caniuse stats</a></p>
  </div>
</div>

    </div>
</template>

    <script>
    
    </script>

    <style lang="scss" >
$color-dark: #222;
$color-body: #ccc;
$color-background: white;

.sidebar {
  width: 25%;
  height: 25vh; // experiment with this value, try changing to 110vh
  min-height: 200px;
  overflow: auto;
  position: -webkit-sticky;
  position: sticky;
  top: 5%;
}

.main {
  width: 60%;
  height: 200vh;
  min-height: 1000px;
  display: flex;
  flex-direction: column;
}

.main,
.sidebar {
  border: 5px solid $color-dark;
  background-color: $color-background;
  border-radius: 10px;
  color: $color-dark;
  padding: 15px;
}

.wrapper {
  display: flex;
  justify-content: space-between;
}

// Decoration for demo

body {
  padding: 3%;
  background-color: $color-body;
  font-size: 20px;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
}

code, pre {
  background-color: #ccc;
  padding: 0 3px;
  border-radius: 5px;
}

.bottom {
  justify-self: bottom;
}       
    </style>