import * as actionTypes from './constants';
import { Map } from 'immutable'

const initState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upRanking: {},
  newRanking: {},
  originRanking: {},

  settleSinger: [],
  qrCreate: "",
  qrCheck:{},
  cellphone: {},
  errMessage: "",
  loginSuccess: true,
  userInformation: {},
  vip: {},
  signin: {},
  searchContent: {},
  searchSuggest: {}
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums", action.newAlbums)
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking)
    case actionTypes.CHANGE_SETTLE_SINGER:
      return state.set("settleSinger", action.settleSinger)
    case actionTypes.CHANGE_QR_CREATE:
      return state.set("qrCreate", action.qrCreate)
    case actionTypes.CHANGE_QR_CHECK:
      return state.set("qrCheck", action.qrCheck)
    case actionTypes.CHANGE_CELLPHONE:
      return state.set("cellphone", action.cellphone)
    case actionTypes.ERR_MESSAGE:
      return state.set("errMessage", action.errMessage)
    case actionTypes.LOGIN_SUCEESS:
      return state.set("loginSuccess", action.loginSuccess)
    case actionTypes.USER_INFORMATION:
      return state.set("userInformation", action.userInformation)
    case actionTypes.VIP:
      return state.set("vip", action.vip)
    case actionTypes.USER_SIGNIN:
      return state.set("signin", action.signin)
    case actionTypes.SEARCH_CONTENT:
      return state.set("searchContent", action.searchContent)
    case actionTypes.SEARCH_SUGGEST:
      return state.set("searchSuggest", action.searchSuggest)
    default:
      return state
  }
}

export default reducer;