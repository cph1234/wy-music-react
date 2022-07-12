import * as actionTypes from "./constants"
import { Map } from "immutable"

const initState = Map({
  privateInfo: {},
  privateHistory: {}
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_PRIVATE_INFO:
      return state.set("privateInfo", action.privateInfo)
    case actionTypes.GET_PRIVATE_HISTORY:
      return state.set("privateHistory", action.privateHistory)
    default:
      return state
  }
}

export default reducer;