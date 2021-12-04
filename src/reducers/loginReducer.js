import { types } from "../types/types";

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.displayName,
            }
        default:
            return state
    }
}