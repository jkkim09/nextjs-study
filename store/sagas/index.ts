import { all, call } from 'redux-saga/effects';
import watchSearch from './SearchSaga'
import test from './TestSaga'
 
export default function* rootSaga() {
  yield all([
      call(watchSearch),
      call(test)
  ])
}
