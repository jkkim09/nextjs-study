import * as actions from 'store/actions/actionTypes'

const initialState = {
    testValue: 'test1'
}

export default (state=initialState, action) => {
    console.log("reduc", action.type, action.payload)
    switch(action.type){    
        case actions.TEST:
            return {
            ...state,
            testValue: action.payload
            }
        case actions.TEST_SUCCESS:
            return {
                ...state,
                testValue: action.payload
            }
        case actions.TEST_FAILL:
            return {
                ...state,
                testValue: action.payload
            }
        default:
            return state;
    }
}