import actionTypes from '../types/actionTypes'


export function onClickSearchButton(q: string) {
    return {
        "q": q,
        "type": actionTypes.FETCH_USERS_LIST_ASYNC,
    }
}

