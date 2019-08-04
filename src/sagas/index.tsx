import { fork } from 'redux-saga/effects'
import { watchFetchUsersList } from './fetchUsersList'
import { watchFetchUserDetail } from './fetchUserDetail'

export default function* rootSaga() {
    yield fork(watchFetchUsersList);
    yield fork(watchFetchUserDetail);
}