import * as actionTypes from './constants'
import { getUserPlaylist, getPresonRecord } from '@/services/user'
import { getUserInformation } from '@/services/recommend'

export const getUserPlaylistAction = (uid, limit = 30, offset = 0) => {
  return dispatch => {
    getUserPlaylist(uid, limit, offset).then(res => {
      dispatch(changeUserPlaylistAction(res))
    })
  }
}

const changeUserPlaylistAction = userPlaylist => ({
  type: actionTypes.USERPLAYLIST,
  userPlaylist
})

export const getUserRecordAction = (uid, type) => {
  return dispatch => {
    getPresonRecord(uid, type).then(res => {
      dispatch(changeUserRecordAction(res))
    })
  }
}

const changeUserRecordAction = userRecord => ({
  type: actionTypes.USERRECORD,
  userRecord
})

export const getPersonInformationAction = (uid) => {
  return dispatch => {
    getUserInformation(uid).then(res => {
      dispatch(changePersonInformationAction(res))
    })
  }
}

const changePersonInformationAction = personInformation => ({
  type: actionTypes.PERSON_INFORMATION,
  personInformation
})