import { Map } from "immutable";
import * as actionTypes from './constants';

const initState = Map({
  artistList:[]
})

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set("artistList", action.artistList)
    default:
      return state
  }
}