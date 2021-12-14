import { createUserWithEmailAndPassword, getAuth, updateProfile } from "@firebase/auth"
import { types } from "../types/types"
import Swal from 'sweetalert2'

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
                // eslint-disable-next-line
                Swal.fire('Error', error.code == 'auth/email-already-in-use' && 'The email address is already in use by another account.', 'error')
            })
    }
}