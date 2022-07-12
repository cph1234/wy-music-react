import request from './request'

//收藏歌单
export function getUserPlaylist(uid, limit, offset) {
  return request({
    url: "/user/playlist",
    params: {
      uid,
      limit,
      offset
    }
  })
}

//播放记录
export function getUserRecord(uid, type) {
  return request({
    url: "/user/record",
    params: {
      uid,
      type,
      cookie: localStorage.getItem("cookie"),
    }
  })
}

export function getPresonRecord(uid, type) {
  return request({
    url: "/user/record",
    params: {
      uid,
      type,
    }
  })
}
//签到
export function getSignin(type) {
  return request({
    url: "/daily_signin",
    params: {
      type,
      cookie: localStorage.getItem("cookie")
    }
  })
}
// export function getVip() {
//   return request({
//     url: `/user/subcount?${localStorage.cookie}`,
//   })
// }

//私信
export function getMymessage(limit, offset) {
  return request({
    url: "/msg/private",
    params: {
      limit,
      offset,
      cookie: localStorage.getItem("cookie")
    }
  })
}
//私信历史
export function getPrivateHistory(uid) {
  return request({
    url: "/msg/private/history",
    params: {
      uid,
      cookie: localStorage.getItem("cookie")
    }
  })
}
//用户等级信息
// export function getUserLevel() {
//   return request({
//     url: "/user/level",
//     params: {
//       cookie: localStorage.getItem("cookie")
//     }
//   })
// }
//更新用户信息
export function getUserSetting(gender, birthday, nickname, province, city, signature) {
  return request({
    url: "/user/update",
    params: {
      gender,
      birthday,
      nickname,
      province,
      city,
      signature,
      cookie: localStorage.getItem("cookie")
    }
  })
}

export function getCommentLike(id, cid, t, type) {
  return request({
    url: "/comment/like",
    params: {
      id,
      cid,
      t,
      type,
      cookie: localStorage.getItem("cookie")
    }
  })
}

export function getComment(t, type, id, content, commentId = null) {
  return request({
    url: "/comment",
    params: {
      t,
      type,
      id,
      content,
      commentId,
      cookie: localStorage.getItem("cookie")
    }
  })
}