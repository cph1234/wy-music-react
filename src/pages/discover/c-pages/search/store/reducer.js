import { Map } from 'immutable';
import * as actionTypes from './constants'

const initState = Map({
  searchContent: {},
  searchKeyWord: ''
})

function reducer(state = initState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_CONTENT:
      return state.set("searchContent", action.searchContent)
    case actionTypes.SEARCH_KEYWORD:
      return state.set("searchKeyWord", action.searchKeyWord)
    default:
      return state
  }
}

export default reducer