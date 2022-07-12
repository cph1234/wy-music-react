import * as actionTypes from './constants'
import { getUserPlaylist, getUserRecord } from '@/services/user'

export const getUserPlaylistAction = (uid, limit=30, offset=0) => {
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
    getUserRecord(uid, type).then(res => {
      dispatch(changeUserRecordAction(res))
    })
  }
}

const changeUserRecordAction = userRecord => ({
  type: actionTypes.USERRECORD,
  userRecord
})