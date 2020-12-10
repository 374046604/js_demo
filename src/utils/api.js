import axios from 'axios';
import url from './url'

axios.defaults.timeout = 10000;
axios.defaults.baseURL =url.API_URL;

/**使用方法 */
//main.js 引入
// import axios from 'axios'
// import {POST,GET,PATCH,PUT} from './utils/utilHttp.js'
// //定义全局变量
// Vue.prototype.$POST=POST;
// Vue.prototype.$GET=GET;
// Vue.prototype.$PATCH=PATCH;
// Vue.prototype.$PUT=PUT;
// 案例
// mounted(){
//     this.$GET('/api/v2/movie/top250')
//       .then((response) => {
//         console.log(response)
//       })
//   },

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // auth-token:t_1554_1_d923a219-22f2-4e36-befe-4eaa0ff86000
    // config.headers['auth-token'] = localStorage.getItem('auth-token')||'';
    // config.headers['client'] = 1;
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if(response.data.errCode ==2){
//       router.push({
//         path:"/login",
//         querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function Get(url,params={}){
  return new Promise((resolve,reject) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function Post(url,data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
   })
 }

 /**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function Patch(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.patch(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}

 /**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function Put(url,data = {}){
  return new Promise((resolve,reject) => {
    axios.put(url,data)
         .then(response => {
           resolve(response.data);
         },err => {
           reject(err)
         })
  })
}