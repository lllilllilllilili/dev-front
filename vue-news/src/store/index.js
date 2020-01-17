import Vue from 'vue'; //설치된 vue library 들고 온다. 
import Vuex from 'vuex';
//plug in 

Vue.use(Vuex); 

//내보내야 함 
export const sotre = new Vuex.Store({ //Vuex는 상태 관리 도구 = 여러 Component 간에 
    //공유되는 데이터 속성
    //Component 관계가 복잡할때 데이터 조작이 쉽다. 
    state : {
        news:[]

    }
    // getters,
    // mutations,
    // actions,
})