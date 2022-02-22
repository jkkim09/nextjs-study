import { put, takeLatest } from 'redux-saga/effects';
import { TEST } from 'store/actions/actionTypes'
import { testFail, testSuccess } from '../actions/test';


function* fetchSearchSaga(e) {
    try {
        yield put(testSuccess("test1211"))
    } catch (error) {
        yield put(testFail("test3"))
    }
}

export default function* watchSearch() {
    // 엑션 타입이 SEARCH 였을때 동작하는 발생
    yield takeLatest(TEST, fetchSearchSaga);
}