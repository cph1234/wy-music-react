import * as actionTypes from "./constants"
import { Map } from "immutable"

const initState = Map({
  userLevel: {},
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_LEVEL:
      return state.set("userLevel", action.userLevel)
    default:
      return state
  }
}

export default reducer;