import {TEST, TEST_SUCCESS, TEST_FAILL} from './actionTypes';

export const test = () => {
    return {
        type: TEST,
        payload: "test55"
    }
}

export const testSuccess = (payload) => {
    return {
        type: TEST_SUCCESS,
        payload: payload
    }
}

export const testFail = (payload) => {
    return {
        type: TEST_FAILL,
        payload: payload
    }
}