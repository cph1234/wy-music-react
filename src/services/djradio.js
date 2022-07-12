import request from './request'

export function getRecommendProgram() {
  return request({
    url: '/program/recommend'
  })
}

export function getProgramToplist(offset, limit) {
  return request({
    url: '/dj/program/toplist',
    params: {
      offset,
      limit
    }
  })
}

export function getRecommendType(type) {
  //2：音乐推荐
  //3：情感
  //6：生活
  //2001：创作翻唱

  //5：人文历史
  //14：明星专区
  //11：新闻资讯
  //13：亲子
  //3001：二次元
  //10001：有声书
  //10002：电音

  return request({
    url: '/dj/recommend/type',
    params: {
      type
    }
  })
}