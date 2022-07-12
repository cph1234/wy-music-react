import request from './request';
// import request2 from './request-token';

export function getTopBanners() {
  return request({
    url: '/banner'
  })
}

export function getHotRecommends() {
  return request({
    url: '/personalized?limit=8'
  })
}

export function getNewAlbum() {
  return request({
    url: '/album/newest?limit=10'
  })
}

export function getTopList(id) {
  //飙升榜：19723756
  //新歌榜：3779629
  //原创榜：2884035
  //热歌榜：3778678
  return request({
    url: "/playlist/detail",
    params: {
      id,
      cookie: localStorage.getItem("cookie"),
    }
  })
}

export function settleSinger(limit) {
  return request({
    url: "/artist/list",
    params: {
      limit
    }
  })
}

export function getUserInformation(uid) {
  return request({
    url: "/user/detail",
    params: {
      uid,
      cookie: localStorage.getItem("cookie")
    }
  })
}

export function getVip(uid = 438807222) {
  return request({
    url: "/user/follows",
    params:{
      uid,
      cookie: localStorage.getItem("cookie"),
    }
  })
}