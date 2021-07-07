import {fetchNewsList} from '../api/index.js';
//ALT + Command 로 제대로 들고왔는지 확인가능
import {fetchJobsList} from '../api/index.js';
import {fetchAskList} from '../api/index.js';
import {fetchUserInfo} from '../api/index.js';
import {fetchItemInfo} from '../api/index.js';
export default {
    FETCH_NEWS(context) {
        fetchNewsList().then(
            response =>{
                 // eslint-disable-next-line no-console
                console.log(response);
                context.commit('SET_NEWS',response.data);
                //commit으로 mutations으로 넘길 수 있다. 
            })
        .catch(error => {
             // eslint-disable-next-line no-console
            console.log(error);
        })
    },
    FETCH_JOBS({commit}){
        fetchJobsList().then(
            ({data}) => {

                commit('SET_JOBS',data);
            }
        ).catch(error=>{
            // eslint-disable-next-line no-console
            console.log(error);
        })
    },
    FETCH_ASK(context){
        fetchAskList().then(
            response => {
                context.commit('SET_ASK',response.data);
            }
        ).catch(error=>{
            // eslint-disable-next-line no-console
            console.log(error);
        })
    },
    FETCH_USER({commit}, name){
        fetchUserInfo(name)
        .then(
            ({data})=>{
                commit('SET_USER', data);
            }
        )
        .catch(error=>{
            // eslint-disable-next-line no-console
            console.log(error);
        });
    },
    FETCH_ITEM({commit}, number){
        fetchItemInfo(number)
        .then(
            ({data})=>{
                commit('SET_ITEM',data);
            }
        )
        .catch(error=>{
            // eslint-disable-next-line no-console
            console.log(error);
        })
    }
}