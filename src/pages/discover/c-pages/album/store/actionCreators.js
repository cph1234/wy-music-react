import * as actionTypes from './constants';
import { getHotAlbums, getTopAlbums } from '@/services/album'

export const getHotAlbumsAction = () => {
  return dispatch => {
    getHotAlbums().then(res => {
      dispatch(changeHotAlbumAction(res.albums))
    })
  }
}
const changeHotAlbumAction = hotAlbums => ({
  type: actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums
})

export const getTopAlbumsAction = (offset = 0, limit = 35) => {
  return dispatch => {
    getTopAlbums(limit, offset).then(res => {
      dispatch(changeTopAlbumAction(res))
    })
  }
}
const changeTopAlbumAction = topAlbums => ({
  type: actionTypes.CHANGE_TOP_ALBUMS,
  topAlbums
})