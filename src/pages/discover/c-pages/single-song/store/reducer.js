import { Map } from 'immutable';
import * as actionTypes from './constants'

const initState = Map({
  songDetail: {},
  simiSong: {},
  songComments:{}
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SONG_DETAIL:
      return state.set("songDetail", action.songDetail)
    case actionTypes.SIMI_SONG:
      return state.set("simiSong", action.simiSong)
    case actionTypes.SONG_COMMENTS:
      return state.set("songComments", action.songComments)
    default:
      return state
  }
}

export default reducer;