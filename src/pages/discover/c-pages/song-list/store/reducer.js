import * as actionTypes from './constants';
import { Map } from 'immutable';

const initState = Map({
  songListDetail: {},
  songListComments:{},
  commentLike:{},
  comment:{}
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SONG_LIST_DETAIL:
      return state.set("songListDetail", action.songListDetail)
    case actionTypes.CHANGE_SONG_LIST_COMMENTS:
      return state.set("songListComments", action.songListComments)
    case actionTypes.CHANGE_COMMENT_LIKE:
      return state.set("commentLike", action.commentLike)
    case actionTypes.CHANGE_COMMENT:
      return state.set("comment", action.comment)
    default:
      return state
  }
}

export default reducer;