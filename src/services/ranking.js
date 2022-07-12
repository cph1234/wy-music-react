import request from './request';
export function getAllTopList() {
  return request({
    url: "/toplist"
  })
}