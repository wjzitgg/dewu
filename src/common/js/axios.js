import axios from 'axios'
// 创建 axios 实例
const requests = axios.create({ baseURL: "/apis" });    // 基础url

// request interceptor(请求拦截器)
requests.interceptors.request.use(config => {
    //   const token = Vue.ls.get(ACCESS_TOKEN)
      const token = localStorage.getItem('token')
      if (token) {
        config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
      }
      return config
})
export default requests