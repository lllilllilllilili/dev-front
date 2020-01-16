import axios from 'axios';
//node_modules 밑에 설치된 library 가져온다.

//1. HTTP Request & Response 관련된 기본 설정
const config = {
    baseUrl : 'https://api.hnpwa.com/v0/'
}

// 2. API 함수들을 정리
function fetchNewsList(){
    //return axios.get(config.baseUrl+'news/1.json');
    return axios.get(`${config.baseUrl}news/1.json`);
}

//fetchNewsList().then().catch()
export {
    fetchNewsList
}

