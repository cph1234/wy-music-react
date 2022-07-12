import * as actionTypes from './constants';
import { getAlbumList, getSingerAlbum, getComment } from '@/services/album-list';


export const getAlbumListDetailAction = (id) => {
  return (dispatch, getState) => {
    getAlbumList(id).then(res => {
      dispatch(changeAlbumListDetailAction(res))
    }).then(() => {
      const albumList = getState().get("albumList").get("albumListDetail")
      // console.log(albumList.album.artists[0].id)
      dispatch(getSingerAlbumAction(albumList.album.artists && albumList.album.artists[0].id))
    })
  }
}

const changeAlbumListDetailAction = res => ({
  type: actionTypes.CHANGE_ALBUM_LIST_DETAIL,
  albumListDetail: res
})

export const getSingerAlbumAction = (id) => {
  return dispatch => {
    getSingerAlbum(id).then(res => {
      dispatch(changeSingerAlbumAction(res.hotAlbums))
    })
  }
}

const changeSingerAlbumAction = res => ({
  type: actionTypes.CHANGE_SINGER_ALBUM,
  albumSingerAlbum: res
})

export const getCommentAction = (id, limit = 20, offset = 0) => {
  return dispatch => {
    getComment(id, limit, offset).then(res => {
      dispatch(changeCommentAction(res))
    })
  }
}

const changeCommentAction = res => ({
  type: actionTypes.CHANGE_COMMENT,
  albumComment: res
})