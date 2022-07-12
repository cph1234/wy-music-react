import { Map } from 'immutable';
import * as actionTypes from './constants';

const initState = Map({
  hotAlbums: [],
  topAlbums: {},
})

export default function reducer(state = initState, acton) {
  switch (acton.type) {
    case actionTypes.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums", acton.hotAlbums)
    case actionTypes.CHANGE_TOP_ALBUMS:
      return state.set("topAlbums", acton.topAlbums)
    default:
      return state
  }
}