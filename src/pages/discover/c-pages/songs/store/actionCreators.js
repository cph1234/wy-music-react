import * as actionTypes from './constants';
import { getSongCategory, getSongCategoryList } from '@/services/song';

export const getSongCategoryAction = () => {
  return dispatch => {
    getSongCategory().then(res => {
      dispatch(changeSongCategoryAction(res))
    })
  }
}

const changeSongCategoryAction = res => ({
  type: actionTypes.SONG_CATEGORY,
  songCategory: res
})

export const getSongCategoryListAction = (offset = 0, cat = "全部", limit = 35) => {
  return dispatch => {
    getSongCategoryList(cat, offset, limit).then(res => {
      dispatch(changeSongCategoryListAction(res))
      dispatch(changeNameAction(cat))
    })
  }
}

const changeSongCategoryListAction = res => ({
  type: actionTypes.SONG_CATEGORY_LIST,
  songCategoryList: res
})

const changeNameAction = name => ({
  type: actionTypes.CHANGE_NAME,
  name
})