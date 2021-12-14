import '@testing-library/jest-dom';
import { types } from '../../../types/types'
import { login, logout } from '../../../actions/loginAction'

describe('Testing Login & LogOut Sync Actions', () => {
    test('Validating Sync Login', () => {
        const id = 'UserIdAction'
        const displayName = 'UserDisplayNameAction'

        const loginAction = login(id, displayName);

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                id, displayName
            }

        })
    })

    test('Validating Sync Logout Action', () =>{
        // const id = 'UserIdAction'
        // const displayName = 'UserDisplayNameAction'

        const logoutAction = logout()

        expect(logoutAction).toEqual({
            type: types.logout
        })
    })

})