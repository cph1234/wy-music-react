import request from './request';

export function getArtistList(type, area, initial) {
  // type:
  // -1: 全部
  // 1: 男歌手
  // 2: 女歌手
  // 3: 乐队

  // area:
  // -1: 全部
  // 7华语
  // 96欧美
  // 8: 日本
  // 16韩国
  // 0: 其他

  // initial返回内容将以 name 字段开头为 b 或者拼音开头为 b 为顺序排列
  return request({
    url: "/artist/list",
    params: {
      type,
      area,
      initial,
      limit: 100
    }
  })
}
//歌手描述
export function getArtistDesc(id) {
  return request({
    url: "/artist/desc",
    params: {
      id
    }
  })
}
//歌手单曲
export function getArtists(id) {
  return request({
    url: "/artists",
    params: {
      id,
      cookie: localStorage.getItem('cookie')
    }
  })
}
//歌手mv
export function getArtistMv(id) {
  return request({
    url: "/artist/mv",
    params: {
      id,
      cookie: localStorage.getItem('cookie')
    }
  })
}
//歌手专辑
export function getArtistAlbum(id, limit, offset) {
  return request({
    url: "/artist/album",
    params: {
      id,
      limit,
      offset,
      cookie: localStorage.getItem('cookie')
    }
  })
}
//相似歌手
export function getSimiArtist(id) {
  return request({
    url: "/simi/artist",
    params: {
      id,
      cookie: localStorage.getItem('cookie')
    }
  })
}