import { createUserWithEmailAndPassword, getAuth, updateProfile } from "@firebase/auth"
import { types } from "../types/types"

export const register = (email, password, name, usrImg) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            name,
            usrImg
        }
    }
}

export const registerEmailPassword = (email, password, name, usrImg) => {
    return (dispatch) => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password, usrImg)
            .then(async ({ user }) => {
                await updateProfile(auth.currentUser, { displayName: name, photoURL: usrImg })
                dispatch(register(user.email, user.uid, user.displayName, user.photoURL))
            })

            .catch(error => {
                console.log(error);
            })
    }
}