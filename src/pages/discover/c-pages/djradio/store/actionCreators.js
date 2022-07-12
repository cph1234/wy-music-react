import * as actionTypes from './constants';
import { getRecommendProgram, getProgramToplist, getRecommendType } from '@/services/djradio'

export const getRecommendProgramAction = () => {
  return dispatch => {
    getRecommendProgram().then(res => {
      dispatch(changeRecommendProgramAction(res.programs))
    })
  }
}
const changeRecommendProgramAction = recommendProgram => ({
  type: actionTypes.CHANGE_RECOMMEND_PROGRAM,
  recommendProgram
})

export const getProgramToplistAction = (offset = 0, limit = 10) => {
  return dispatch => {
    getProgramToplist(offset, limit).then(res => {
      dispatch(changeProgramToplistAction(res.toplist))
    })
  }
}
const changeProgramToplistAction = programToplist => ({
  type: actionTypes.CHANGE_PROGRAM_TOPLIST,
  programToplist
})

export const getRecommendTypeAction = () => {
  return async (dispatch) => {
    const res = [];
    res[0] = await getRecommendType(2);
    res[1] = await getRecommendType(6);
    res[2] = await getRecommendType(3);
    res[3] = await getRecommendType(2001);
    dispatch(changeRecommendTypeAction(res));
  }
}

// export const getRecommendTypeAction = (type) => {
//   return dispatch => {
//     getRecommendType(type).then(res => {
//       dispatch(changeRecommendTypeAction(res.djRadios))
//     })
//   }
// }
const changeRecommendTypeAction = recommendType => ({
  type: actionTypes.CHANGE_RECOMMEND_TYPE,
  recommendType
})