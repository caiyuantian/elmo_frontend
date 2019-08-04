import { put, takeEvery, call } from 'redux-saga/effects'
import actionTypes from '../types/actionTypes'
import config from '../config'

interface IActionParam {
    "id": number;
    "type": string;
}

export function* fetchUserDetailAsync(action: IActionParam) {

    try {
        const response = yield call(fetch, config.backendAddress + '/api/v1/user/' + action.id.toString());
        const user = yield call([response, 'json']);
        if (user.success) {
            yield put({ type: actionTypes.FETCH_USER_DETAIL_USER_OK, selectedUser: user.result });
        }
    } catch (e) {
        return;
    }
}

export function* fetchUserTweetsAsync(action: IActionParam) {

    const queryStr = "?user_id=" + action.id.toString() + "&count=5"
    try {
        const response = yield call(fetch, config.backendAddress + '/api/v1/tweets' + queryStr);
        const tweets = yield call([response, 'json']);
        if (tweets.success) {
            yield put({ type: actionTypes.FETCH_USER_DETAIL_TWEETS_OK, selectedUserTweets: tweets.result });
        }
    } catch (e) {
        return;
    }
}

export function* watchFetchUserDetail() {
    yield takeEvery(actionTypes.FETCH_USER_DETAIL_ASYNC, fetchUserDetailAsync);
    yield takeEvery(actionTypes.FETCH_USER_DETAIL_ASYNC, fetchUserTweetsAsync);
}