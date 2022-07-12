import { Map } from 'immutable';
import * as actionTypes from './constants';

const initState = Map({
  recommendProgram: [],
  programToplist: [],
  recommendType: []
})

export default function reducer(state = initState, acton) {
  switch (acton.type) {
    case actionTypes.CHANGE_RECOMMEND_PROGRAM:
      return state.set("recommendProgram", acton.recommendProgram)
    case actionTypes.CHANGE_PROGRAM_TOPLIST:
      return state.set("programToplist", acton.programToplist)
    case actionTypes.CHANGE_RECOMMEND_TYPE:
      return state.set("recommendType", acton.recommendType)
    default:
      return state
  }
}