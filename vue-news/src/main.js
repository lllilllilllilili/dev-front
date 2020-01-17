import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/index.js';
//./ 는 상대경로 다. 
//{} 하면 경로가 나온다. 
//router 에서 여기로 옮겨줘야 한다. 
/*eslint-disable*/
import Vuex from 'vuex' //vuex library loading 할 수 있다. 
Vue.config.productionTip = false


import {store} from './store/index.js'; //store file 도 import 해야 한다. 
// new Vuex.Store({
//   //source folder 로 관리하는게 좋다. 
// })


new Vue({

  render: h => h(App),
  //router : router, //router 연결, router는 객체로 불러와야 한다. or router 라고 쓸 수 있다.
  router,
  store, //store : store 앞뒤가 같으면 하나로 쓸 수 있다. 
}).$mount('#app')
//프로젝트 구조의 청사진