import * as actionTypes from './constants';
import { getArtistList } from '@/services/artist'

export const getArtistListAction = (type, area, initial) => {
  return dispatch => {
    getArtistList(type, area, initial).then(res => {
      dispatch(changeArtistListAction(res.artists))
    })
  }
}

const changeArtistListAction = artistList => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList
})