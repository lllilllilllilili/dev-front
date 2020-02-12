<template>
<div class="wrap">
  <div class="ele2">
    <div class="vertical-menu">
  <v-app id="inspire">
    <v-card
      max-width="450"
      class="mx-auto"
    >
      <v-toolbar
        color="cyan"
        dark
      >
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
  
        <v-toolbar-title>
          유저 랭크 검색하기
         
        </v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon @click="userRank">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
       
      </v-toolbar>
  
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader
            v-if="item.header"
            :key="item.header"
            v-text="item.header"
          ></v-subheader>
  
          <v-divider
            v-else-if="item.divider"
            :key="index"
            :inset="item.inset"
              
          ></v-divider>
  
          <v-list-item
            v-else
            :key="item.title"
            class="userList"
          >
            <v-list-item-avatar>
              <v-img :src="item.avatar"></v-img>
            </v-list-item-avatar>
  
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <!-- <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle> -->
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-card>
  </v-app>
</div>
   </div>
</div>
</template>

<script>
// import userRankListDetail from './userRankListDetail.vue'
export default {
  
  data: () => ({
    items: [
      { header: 'Today' },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
      },
    ],
    dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
    
  }),
  methods : {
    userRank(){
       // eslint-disable-next-line no-console
      console.log('clicked');
      this.$router.push({path : '/userRankListDetail'})
    }
  }
}
</script>

<style>
#inspire {
   background: rgb(204, 204, 204);
}
.wrap {
  position: absolute;
  width: 100%;
  height: 1000px;
  left : 20

}

  .ele2 {
  /*display: inline-block;*/
  position: sticky;
  top: 300px;
  right : 400px;
  background: blue;
  
}

.vertical-menu {
  position : absolute;
  width: 200px; /* Set a width if you like */
}
.userList{
  height : 30px;
}
/* 
.vertical-menu a { */
  /*background-color: #eee; /* Grey background color */
  /*color: black; /* Black text color */
  /*display: block; /* Make the links appear below each other */
  /*padding: 12px; /* Add some padding */
  /*text-decoration: none; /* Remove underline from links */
/* } */

/*.vertical-menu a:hover {
 /* background-color: yellowgreen; /* Dark grey background on mouse-over } */

/*.vertical-menu a.active {
  background-color: #4CAF50; /* Add a green color to the "active/current" link */
  /*color: white;
}*/

.theme--light.v-application {
    background: rgb(204, 204, 204);

}
.v-card>:last-child:not(.v-btn):not(.v-chip) {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    height: 250px;
}
.theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    min-height: 33px;
    color: rgba(0, 0, 0, 0.87) !important;
}
.theme--light.v-card {
    background-color: #fff;
    color: rgba(0,0,0,.87);
    left: 350px;
}
</style>