import { put, takeEvery, call } from 'redux-saga/effects'
import actionTypes from '../types/actionTypes'
import config from '../config'

interface IActionParam
{
    "q": string;
    "type": string;
}

export function* fetchUsersListAsync(action:IActionParam) {

    const queryStr = "?q="+action.q+"&page=1&count=10"
    try {
        const response = yield call(fetch, config.backendAddress+'/api/v1/users' + queryStr);
        const users = yield call([response, 'json']);
        // console.log(JSON.stringify(users))
        if (users.success) {
            yield put({ type: actionTypes.FETCH_USERS_LIST_OK, usersList: users.result });
        }
    } catch (e) {
        return;
    }
}

export function* watchFetchUsersList() {
    yield takeEvery(actionTypes.FETCH_USERS_LIST_ASYNC, fetchUsersListAsync);
}