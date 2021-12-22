import { types } from "../types/types";

export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case types.register:
            return {
                ...state,
                newUser: action.payload
                // usrImg: action.payload.usrImg,
                // email: action.payload.email,
                // password: action.payload.password,
                // name: action.payload.name
            }
        default:
            return state
    }
}