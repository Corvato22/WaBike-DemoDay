import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { registerUserAsync } from '../../../actions/loginAction'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)
const initState = {
    login: {
        id: 'testID'
    }
}

let store = mockStore(initState)

describe('Validating Sync sign-up', () => {

    beforeEach(() => {
        store = mockStore(initState)
    })

    test('Create entry in DB', async () => {

        await store.dispatch(registerUserAsync({
            url: 'Test URL',
            nombre: 'Test Name',
            email: 'Test Email'
        }))
    })
})