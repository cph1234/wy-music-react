import request from "./request";

export function getSongListDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

export function getPlaylistComment(id, offset, limit) {
  return request({
    url: "/comment/playlist",
    params: {
      id,
      limit,
      offset
    }
  })
}