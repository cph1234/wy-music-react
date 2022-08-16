import request from './request'

export function getAlbumList(id) {
  return request({
    url: "/album",
    params: {
      id,
      cookie: localStorage.getItem('cookie')
    }
  })
}

export function getSingerAlbum(id) {
  return request({
    url: "/artist/album",
    params: {
      id,
      cookie: localStorage.getItem('cookie')
    }
  })
}



export function getComment(id, limit, offset) {
  return request({
    url: "/comment/album",
    params: {
      id,
      limit,
      offset,
      cookie: localStorage.getItem('cookie')
    }
  })
}