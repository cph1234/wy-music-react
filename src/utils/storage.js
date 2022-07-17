/*
* 进行local数据存储管理的工具模块
* */
import store from 'store'
const USER_KEY = 'user_key'
const storage = {
  //保存
  saveUser(user,cookie) {
    // localStorage.setItem(USER_KEY,JSON.stringify(user))
    store.set(USER_KEY, user)
    // localStorage.setItem('accessToken', user.token);
    // localStorage.setItem('cookie', encodeURIComponent(cookie));
    // localStorage.setItem('cookie', cookie);
  },
  //读取
  getUser() {
    // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
    return store.get(USER_KEY) || {}
  },
  //删除
  deleteUser() {
    // localStorage.removeItem(USER_KEY)
    store.remove(USER_KEY)
    // localStorage.removeItem("accessToken");
    localStorage.removeItem("cookie");
  }
}

export default storage