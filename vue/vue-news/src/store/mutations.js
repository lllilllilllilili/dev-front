export default {
    SET_NEWS(state, news){ //SET_NEWS : function() 과 같다. 
        state.news = news;
        //response.data 가 news로 넘어오고 
        //state.news로 하면 news라는 배열안에 
        //호출 데이터가 담기게 된다. 
    },
    SET_JOBS(state, jobs){
        state.jobs = jobs;
    },
    SET_ASK(state, ask){
        state.ask = ask;
    },
    SET_USER(state,user){
        state.user=user;
    },
    SET_ITEM(state,item){
        state.item = item;
    }
}