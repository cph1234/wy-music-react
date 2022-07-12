import request from './request'

//type默认为 1 即单曲 , 取值意义 : 1: 单曲, 10: 专辑, 100: 歌手, 
//1000: 歌单, 1002: 用户, 1004: MV, 1006: 歌词, 1009: 电台, 
//1014: 视频, 1018:综合, 2000:声音
export function getSearchContent(keywords, limit = 20, offset = 0, type = 1) {
  return request({
    url: '/search',
    params: {
      keywords,
      limit,
      offset,
      type
    }
  })
}

export function getSearchSuggest(keywords) {
  return request({
    url: '/search/suggest',
    params: {
      keywords
    }
  })
}