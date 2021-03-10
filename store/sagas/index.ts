import { all, call } from 'redux-saga/effects';
import watchSearch from './SearchSaga'
 
export default function* rootSaga() {
  yield all([
      call(watchSearch)
  ])
}
