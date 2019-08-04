import rootReducer from '../../src/reducers'
import actionTypes from '../../src/types/actionTypes'

it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(
        {
            usersList: []
        }
    )
})

it('should handle received actions1', () => {
    expect(
        rootReducer({usersList: []}, {
            type: actionTypes.FETCH_USERS_LIST_OK,
            action: 'Run the tests'
        })
    ).toEqual(
        {
            usersList: undefined
        }
    )
})

it('should handle received actions2', () => {
    expect(
        rootReducer({usersList: []}, {
            type: actionTypes.FETCH_USER_DETAIL_USER_OK,
            action: 'Run the tests'
        })
    ).toEqual(
        {
            selectedUser: undefined,
            usersList: []
        }
    )
})

it('should handle received actions3', () => {
    expect(
        rootReducer({usersList: []}, {
            type: actionTypes.FETCH_USER_DETAIL_TWEETS_OK,
            action: 'Run the tests'
        })
    ).toEqual(
        {
            usersList: []
        }
    )
})


it('should handle received actions4', () => {
    expect(
        rootReducer({usersList: []}, {
            type: "TEST",
            action: 'Run the tests'
        })
    ).toEqual(
        {
            usersList: []
        }
    )
})




