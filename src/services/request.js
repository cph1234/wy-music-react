import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';
// axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})
//拦截器
instance.interceptors.request.use(config => {
  // instance.defaults.withCredentials=true;
  // let accessToken = localStorage.getItem('accessToken');
  // console.log(accessToken)
  // if (accessToken) {
  //   instance.defaults.headers.common['Authorization'] = accessToken;
  // }
  // if (config.method == 'post') {
  //   config.data = {
  //     ...config.data,
  //     _t: Date.parse(new Date())
  //   }
  // } else if (config.method == 'get') {
  //   config.params = {
  //     _t: Date.parse(new Date()),
  //     ...config.params
  //   }
  // }
  return config;
}, err => {
  return err
})

instance.interceptors.response.use(response => {
  // let accessToken = response.headers['authorization'];
  // if (accessToken && accessToken !== '') {
  //   localStorage.setItem('accessToken', accessToken);
  // }
  return response.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err;
})

export default instance;