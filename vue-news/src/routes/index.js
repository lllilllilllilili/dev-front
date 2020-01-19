/*eslint-disable*/
import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import ItemView from '../views/ItemVue.vue';
import UserView from '../views/UserView.vue';
import JobsView from '../views/JobsView.vue'; //eslint 라서 error 뜨는건 무시한다. 
//eslint plug in 써주면 놓치고 있는 부분 인지 할 수 있다. 


Vue.use(VueRouter);

//라우터 정보 관리 = 라우터 객체 
export const router = new VueRouter({
    mode : 'history',
    routes:[
        {
            path:'/',
            redirect:'/news',
        },
        {
            //path: url 주소
            //component : url 주소로 갔을때 표시될 컴포넌트
            path: '/news',
            component: NewsView,
        },
        {
            path:'/ask',
            component: AskView,
        },
        {
            path:'/jobs',
            component:JobsView,
        },
        {
            path : '/item/:id',
            component : ItemView,
        },
        {
            path : '/user/:id',
            component : UserView, 
        },
    ]
  });
  
  //router를 export 해야 쓸수 있다. 