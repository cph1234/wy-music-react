import * as actionTypes from './constants';
import { Map } from 'immutable';

const initState = Map({
  albumListDetail: {},
  albumSingerAlbum:[],
  albumComment:{}
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ALBUM_LIST_DETAIL:
      return state.set("albumListDetail", action.albumListDetail)
    case actionTypes.CHANGE_SINGER_ALBUM:
      return state.set("albumSingerAlbum", action.albumSingerAlbum)
    case actionTypes.CHANGE_COMMENT:
      return state.set("albumComment", action.albumComment)
    default:
      return state
  }
}

export default reducer;