import * as actionTypes from './constants';
import { Map } from 'immutable'
const initState = Map({
  upRanking: {},
  newRanking: {},
  originRanking: {},
  hotRanking: {},
  allList:[]
})

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_RANKING:
      return state.set('hotRanking', action.hotRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking);
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', action.upRanking); 
    case actionTypes.CHANGE_ALL_LIST:
      return state.set('allList', action.allList);
    default:
      return state;
  }
}