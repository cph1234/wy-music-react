import * as actionTypes from './constants';
import { getTopList } from '@/services/recommend';
import { getAllTopList } from '@/services/ranking';

export const changeUpRanking = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

export const changeNewRanking = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

export const changeHotRanking = res => ({
  type: actionTypes.CHANGE_HOT_RANKING,
  hotRanking: res.playlist
})

export const changeOriginRanking = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getRanking = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 3779629:
          dispatch(changeNewRanking(res));
          break;
        case 3778678:
          dispatch(changeHotRanking(res));
          break;
        case 2884035:
          dispatch(changeOriginRanking(res));
          break;
        case 19723756:
          dispatch(changeUpRanking(res));
          break;
        default:
          break;
      }
    })
  }
}

export const getAllTopListAction = () => {
  return dispatch => {
    getAllTopList().then(res => {
      dispatch(changeAllTopListAction(res))
    })
  }
}
export const changeAllTopListAction=res=>({
  type: actionTypes.CHANGE_ALL_LIST,
  allList:res.list
})