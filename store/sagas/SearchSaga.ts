import { call, put, takeEvery } from "redux-saga/effects";
import {SEARCH} from 'store/actions/actionTypes'
import * as actions from "store/actions/search";
import axios from "axios";
 
function searchAPI(data) {
    return axios.get(`https://api.tvmaze.com/search/shows?q=superman`)
}

function* fetchSearchSaga(action) {
    try {
        // action 의 정보
        // payload: {test: 'test1'}
        // type: "SEARCH"
        const { data } = yield call(searchAPI, action.data)
        console.log(action)
        // redux 의 상태 변경
        yield put(actions.searchSuccess(data));
    } catch (error) {
        yield put(actions.searchFail('error'));
    }
}

/**
 * SEARCH DISPATH EVENT WATCH
 * 이벤트기 감지되었을때 동작한다.
 */
export default function* watchSearch() {
    // 엑션 타입이 SEARCH 였을때 동작하는 발생
    yield takeEvery(SEARCH, fetchSearchSaga);
}