import { Map } from 'immutable';
import * as actionTypes from './constants'

const initState = Map({
  artists: {},
  artistMv: {},
  artistAlbum: {},
  artistDesc: {},
  simiArtist:[]
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_ARTISTS:
      return state.set("artists", action.artists)
    case actionTypes.GET_ARTIST_MV:
      return state.set("artistMv", action.artistMv)
    case actionTypes.GET_ARTIST_ALBUM:
      return state.set("artistAlbum", action.artistAlbum)
    case actionTypes.GET_ARTIST_DESC:
      return state.set("artistDesc", action.artistDesc)
    case actionTypes.GET_SIMI_ARTIST:
      return state.set("simiArtist", action.simiArtist)
    default:
      return state
  }
}

export default reducer;