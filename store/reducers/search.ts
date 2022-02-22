import * as actions from 'store/actions/actionTypes'

const initialState = {
    data: [],
    payload: {},
    error: ''
}

export default (state=initialState, action) => {
    switch(action.type){
      case actions.SEARCH:
        return {
          ...state,
          payload: action.payload
        }
      case actions.SEARCH_SUCCESS:
        return {
          ...state,
          data: action.data
        }
      case actions.SEARCH_FAIL:
        return {
          ...state,
          error: action.error
        }
      default:
        return state;
    }
  }