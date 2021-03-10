import {SEARCH , SEARCH_SUCCESS, SEARCH_FAIL  } from './actionTypes';

export const search = (payload) => {
    return {
        type: SEARCH,
        payload: payload
    }
}

export const searchSuccess = (data) => {
    return {
        type: SEARCH_SUCCESS,
        data: data
    }
}

export const searchFail = (error) => {
    return {
        type: SEARCH_FAIL,
        error: error
    }
}