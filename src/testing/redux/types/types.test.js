import '@testing-library/jest-dom';
import { types } from '../../../types/types'

describe('It should checks types', () => {
    test('Comparing and verifying types', () => {
        expect(types).toEqual({
            login: '[Auth] login',
            logout: '[Auth] logout',
            register: '[Auth] register',
            delete: '[Auth] delete'
        })
    })
})