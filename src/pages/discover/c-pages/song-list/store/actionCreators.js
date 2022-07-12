import * as actionTypes from './constants';
import { getSongListDetail, getPlaylistComment } from '@/services/song-list'
import { getCommentLike, getComment} from '@/services/user'

export const getSongListDetailAction = (id) => {
  return dispatch => {
    getSongListDetail(id).then(res => {
      dispatch(changeSongListDetailAction(res))
    })
  }
}

const changeSongListDetailAction = res => ({
  type: actionTypes.CHANGE_SONG_LIST_DETAIL,
  songListDetail: res
})

export const getPlaylistCommentAction = (id, offset = 0, limit = 20) => {
  return dispatch => {
    getPlaylistComment(id, offset, limit).then(res => {
      dispatch(changePlaylistCommentAction(res))
    })
  }
}

const changePlaylistCommentAction = res => ({
  type: actionTypes.CHANGE_SONG_LIST_COMMENTS,
  songListComments: res
})

export const getCommentLikeAction = (id, cid, t, type) => {
  return dispatch => {
    getCommentLike(id, cid, t, type).then(res => {
      dispatch(changeCommentLikeAction(res))
    })
  }
}

const changeCommentLikeAction = res => ({
  type: actionTypes.CHANGE_COMMENT_LIKE,
  commentLike: res
})

export const getCommentAction = (t, type, id, content, commentId) => {
  return dispatch => {
    getComment(t, type, id, content, commentId).then(res => {
      dispatch(changeCommentAction(res))
    })
  }
}

const changeCommentAction = res => ({
  type: actionTypes.CHANGE_COMMENT,
  comment: res
})