import '@testing-library/jest-dom';
import { loginReducer } from '../../../reducers/loginReducer';
import { types } from '../../../types/types'

describe('Testing loginReducer', () => {
    test('It must login', () => {
        const initalState = {};
        
        const action = {
            type: types.login,
            payload: {
                id: 'UserID',
                displayName: 'UserName'
            }
        }

        const state = loginReducer(initalState, action);
        expect(state).toEqual({
            id: 'UserID',
            name: 'UserName'
        })
    })

    test('Should close session (logout)', () => {
        const initialState = {
            id: 'UserID',
            displayName: 'UserName'
        }

        const action = {
            type: types.logout
        }

        const state = loginReducer(initialState, action)
        expect(state).toEqual({})
    })
})
