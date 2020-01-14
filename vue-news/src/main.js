import Vue from 'vue'
import App from './App.vue'
import {router} from './router/index.js';
//./ 는 상대경로 다. 
//{} 하면 경로가 나온다. 
//router 에서 여기로 옮겨줘야 한다. 

Vue.config.productionTip = false



new Vue({

  render: h => h(App),
  //router : router, //router 연결, router는 객체로 불러와야 한다. or router 라고 쓸 수 있다.
  router,
}).$mount('#app')
//프로젝트 구조의 청사진