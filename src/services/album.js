import request from './request';
//新碟上架
export function getHotAlbums() {
  return request({
    url: "/album/newest"
  })
}

export function getTopAlbums(limit, offset) {
  // limit: 取出数量, 默认为 50
  // offset: 偏移数量, 用于分页, 如 : (页数 - 1) * 50, 其中 50 为 limit 的值, 默认 为 0
  return request({
    url: "/top/album",
    params: {
      limit,
      offset
    }
  })
}

