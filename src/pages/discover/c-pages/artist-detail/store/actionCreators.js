import { getArtists, getArtistMv, getArtistAlbum, getArtistDesc, getSimiArtist} from '@/services/artist'
import * as actionTypes from './constants'

export const getArtistsAction = (id) => {
  return dispatch => {
    getArtists(id).then(res => {
      dispatch(changeArtistsAction(res))
    })
  }
}
const changeArtistsAction = artists => ({
  type: actionTypes.GET_ARTISTS,
  artists
})

export const getArtistMvAction = (id) => {
  return dispatch => {
    getArtistMv(id).then(res => {
      dispatch(changeArtistMvAction(res))
    })
  }
}
const changeArtistMvAction = artistMv => ({
  type: actionTypes.GET_ARTIST_MV,
  artistMv
})

export const getArtistAlbumAction = (id, limit = 30, offset = 0) => {
  return dispatch => {
    getArtistAlbum(id, limit, offset).then(res => {
      dispatch(changeArtistAlbumAction(res))
    })
  }
}
const changeArtistAlbumAction = artistAlbum => ({
  type: actionTypes.GET_ARTIST_ALBUM,
  artistAlbum
})

export const getArtistDescAction = (id) => {
  return dispatch => {
    getArtistDesc(id).then(res => {
      dispatch(changeArtistDescAction(res))
    })
  }
}
const changeArtistDescAction = artistDesc => ({
  type: actionTypes.GET_ARTIST_DESC,
  artistDesc
})

export const getSimiArtistAction = (id) => {
  return dispatch => {
    getSimiArtist(id).then(res => {
      console.log(id)
      console.log(res)
      dispatch(changeSimiArtistAction(res))
    })
  }
}
const changeSimiArtistAction = simiArtist => ({
  type: actionTypes.GET_SIMI_ARTIST,
  simiArtist
})