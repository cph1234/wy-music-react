import * as actionTypes from "./constants"
import { Map } from "immutable"

const initState = Map({
  userSetting: {},
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.GET_USER_SETTING:
      return state.set("userSetting", action.userSetting)
    default:
      return state
  }
}

export default reducer;