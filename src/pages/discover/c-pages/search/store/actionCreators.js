import * as actionTypes from './constants'
import { getSearchContent } from '@/services/search'

export const getSearchContentAction = (keywords, type = 1, limit = 20, offset = 0) => {
  // console.log(keywords);
  return dispatch => {
    getSearchContent(keywords, limit, offset, type).then(res => {
      dispatch(changeSearchContentAction(res.result))
    })
  }
}

export const changeSearchContentAction = res => ({
  type: actionTypes.SEARCH_CONTENT,
  searchContent: res
})

export const getSearchKeywordAction = (keywords) => {
  return dispatch => {
    dispatch(changeSearchKeywordAction(keywords))
  }
}

export const changeSearchKeywordAction = keywords => ({
  type: actionTypes.SEARCH_KEYWORD,
  searchKeyWord: keywords
})
