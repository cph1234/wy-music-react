import * as actionTypes from './constants';
import { Map } from 'immutable';

const initState = Map({
  songCategory: {},
  songCategoryList: [],
  name:"全部"
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SONG_CATEGORY:
      return state.set("songCategory", action.songCategory)
    case actionTypes.SONG_CATEGORY_LIST:
      return state.set("songCategoryList", action.songCategoryList)
    case actionTypes.CHANGE_NAME:
      return state.set("name", action.name)
    default:
      return state
  }
}

export default reducer;
