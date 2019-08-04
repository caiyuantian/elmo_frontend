import { put, takeEvery, call } from 'redux-saga/effects'
import actionTypes from '../types/actionTypes'
import config from '../config'

interface IActionParam
{
    "q": string;
    "type": string;
}

export function* fetchUsersListAsync(action:IActionParam) {

    console.log("run here1")
    const queryStr = "?q="+action.q+"&page=1&count=10"
    try {
        console.log("run here2")
        const response = yield call(fetch, config.backendAddress+'/api/v1/users' + queryStr);
        console.log("run here3")
        const users = yield call([response, 'json']);
        console.log("run here4")
        // console.log(JSON.stringify(users))
        if (users.success) {
            console.log("run here5")
            yield put({ type: actionTypes.FETCH_USERS_LIST_OK, usersList: users.result });
            console.log("run here6")
        }
    } catch (e) {
        console.log("run here7")
        return;
    }
}

export function* watchFetchUsersList() {
    yield takeEvery(actionTypes.FETCH_USERS_LIST_ASYNC, fetchUsersListAsync);
}