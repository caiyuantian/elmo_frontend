import actionTypes from '../types/actionTypes'

const initialState = {
    usersList: []
}

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_LIST_OK:
            return { ...state, usersList: action.usersList };
        case actionTypes.FETCH_USER_DETAIL_USER_OK:
            return { ...state, selectedUser: action.selectedUser };
        case actionTypes.FETCH_USER_DETAIL_TWEETS_OK:
            return { ...state, selectedUserTweets: action.selectedUserTweets };
        default:
            return state;
    }
}

export default rootReducer;