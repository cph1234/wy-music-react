import * as actionTypes from './constants'
import { Map } from 'immutable';

const initState = Map({
  userPlaylist: {},
  userRecord: {},
  personInformation: {}
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.USERPLAYLIST:
      return state.set("userPlaylist", action.userPlaylist)
    case actionTypes.USERRECORD:
      return state.set("userRecord", action.userRecord)
    case actionTypes.PERSON_INFORMATION:
      return state.set("personInformation", action.personInformation)
    default:
      return state
  }
}

export default reducer;