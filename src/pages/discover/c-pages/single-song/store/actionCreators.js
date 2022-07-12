import { getSongDetail, getSimiSong, getSongComment } from '@/services/song';
import * as actionTypes from './constants';

export const getSongDetailAction = (ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => {
      dispatch(changeSongDetailAction(res))
    })
  }
}

export const changeSongDetailAction = songDetail => ({
  type: actionTypes.SONG_DETAIL,
  songDetail
})

export const getSimiSongAction = (id) => {
  return dispatch => {
    getSimiSong(id).then(res => {
      dispatch(changeSimiSongAction(res))
    })
  }
}

export const changeSimiSongAction = simiSong => ({
  type: actionTypes.SIMI_SONG,
  simiSong
})

export const getSongCommentsAction = (id, offset = 0, limit = 20) => {
  console.log(id)
  return dispatch => {
    getSongComment(id, offset, limit).then(res => {
      dispatch(changeSongCommentsAction(res))
    })
  }
}

export const changeSongCommentsAction = songComments => ({
  type: actionTypes.SONG_COMMENTS,
  songComments
})