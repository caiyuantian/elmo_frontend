import * as actions from '../../src/actions/index'
import actionTypes from '../../src/types/actionTypes'

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const q = 'Robin Cai'
        const expectedAction = {
            q,
            "type": actionTypes.FETCH_USERS_LIST_ASYNC
        }
        expect(actions.onClickSearchButton(q)).toEqual(expectedAction)
    })
})