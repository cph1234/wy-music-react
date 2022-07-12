import * as actionTypes from './constants';
import { Map } from 'immutable';

const initState = Map({
  playList: [],
  currentSongIndex: 0,
  currentSong: {},
  order: 0,
  lyricsList:[],
  currentLyricIndex:0,
  releventInformation:[]
})

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);
    case actionTypes.CHANGE_ORDER:
      return state.set("order", action.order);
    case actionTypes.CHANGE_LYRICS_LIST:
      return state.set("lyricsList", action.lyricsList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.currentLyricIndex);
    case actionTypes.CHANG_RELEVANT_INFORMATION:
      return state.set("releventInformation", action.releventInformation);
    default:
      return state;
  }
}