import axios from 'axios'
 
// 基础url
axios.defaults.baseURL = '/api';
// request interceptor(请求拦截器)
axios.interceptors.request.use(config => {
  //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
  // config.data = JSON.stringify(config.data);
  // config.headers = {
  //   'Content-Type': 'application/json utf-8' // 配置请求头
  // }
  const token = 'BCD0E8C44239327FB463F9ACFEC12991';
  if (token) {
    config.params = { 'token': token } //如果要求携带在参数中
   // config.headers.token= token; //如果要求携带在请求头中
  }
  console.log(config);
  return config;
})
// export function get (url, params = {}) {

//   return new Promise((resolve, reject) => {
//       axios.get(url, {
//           params: params,
//       }).then(res => {
//           resolve(res.data)
//       }).catch(error => {
//           reject(error)
//       })
//   })
// }
export default axios
