import request from "./request";

export function getSongCategory() {
  return request({
    url: "/playlist/catlist"
  })
}

export function getSongCategoryList(cat = "全部", offset = 0, limit = 35) {
  // order: 可选值为 'new' 和 'hot', 分别对应最新和最热, 默认为 'hot'

  // cat: tag, 比如 " 华语 "、" 古风 " 、" 欧美 "、" 流行 ", 默认为 "全部", 可从歌单分类接口获取(/playlist/catlist)

  // limit: 取出歌单数量, 默认为 50

  // offset: 偏移数量, 用于分页, 如 : (评论页数 - 1) * 50, 其中 50 为 limit 的值
  return request({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}

export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids,
      cookie: localStorage.getItem("cookie")
    }
  })
}

export function getSimiSong(id) {
  return request({
    url: "/simi/song",
    params: {
      id,
      cookie: localStorage.getItem("cookie")
    }
  })
}

export function getSongComment(id, offset, limit) {
  return request({
    url: "/comment/music",
    params: {
      id,
      limit,
      offset,
      cookie: localStorage.getItem("cookie")
    }
  })
}