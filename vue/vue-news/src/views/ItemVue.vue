<template>
  <div>
    <section>
      <!-- 질문 상세 영역 -->
      <div class="user-container">
        <div>
         <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${fetchItem.user}`">
          <!-- 바로 라우터로 보내야 하므로 위와 같이 써야 한다. -->
            {{fetchItem.user}}
          </router-link>
          <div class ="time">
            {{fetchItem.time_ago}}
          </div>
        </div>

        
      </div>
      <h2>{{fetchItem.title}}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchItem.content">

      </div>
      <!-- {{ fetchItem.content }} -->
    </section>
    
    <!-- <p>{{fetchItem.title}}</p>
    <div>{{fetchItem.content}}</div>
    parsing 하는 부분 이 있음. -->
  </div>  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed : {
    // itemInfo(){
    //   return this.$store.state.item;
    // }
    ...mapGetters([
      'fetchItem'
    ])
  },
  created(){
    const itemNumber = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemNumber);
  }
}
</script>

<style scoped>
.user-container{
  display : flex;
  align-items : center;
  padding : 0.5rem;
}
.fa-user{
  font-size : 2.5rem;
}
.user-description{
  padding-left : 8px;
  
}
.time{
  font-size:0.7rem;
}
</style>