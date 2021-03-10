import * as actions from 'store/actions/actionTypes'

const initialState = {
    data: [],
    payload: {},
    error: ''
}

export default (state=initialState, action) => {
    switch(action.type){
      case actions.SEARCH:
        console.log(1, {
          ...state,
          payload: action.payload
        })
        return {
          ...state,
          payload: action.payload
        }
      case actions.SEARCH_SUCCESS:
        console.log(2, {
          ...state,
          data: action.data
        })
        return {
          ...state,
          data: action.data
        }
      case actions.SEARCH_FAIL:
        console.log(3, {
          ...state,
          error: action.error
        })
        return {
          ...state,
          error: action.error
        }
      default:
        return state;
    }
  }