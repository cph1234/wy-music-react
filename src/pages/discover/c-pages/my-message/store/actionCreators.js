import { getMymessage, getPrivateHistory} from "@/services/user"
import * as actionTypes from "./constants"

export const getMymessageAction = (limit, offset) => {
  return dispatch => {
    getMymessage(limit, offset).then(res => {
      dispatch(changMymessageAction(res))
    })
  }
}

const changMymessageAction = privateInfo => ({
  type: actionTypes.GET_PRIVATE_INFO,
  privateInfo
})

export const getPrivateHistoryAction = (uid) => {
  return dispatch => {
    getPrivateHistory(uid).then(res => {
      dispatch(changPrivateHistoryAction(res))
    })
  }
}

const changPrivateHistoryAction = privateHistory => ({
  type: actionTypes.GET_PRIVATE_HISTORY,
  privateHistory
})