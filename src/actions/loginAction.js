import { getAuth, deleteUser, signInWithEmailAndPassword, signInWithPopup, signOut } from "@firebase/auth"
import { google, facebook, db } from "../firebase/firebase"
import { types } from "../types/types"
import { addDoc, collection, getDocs, query, where } from "@firebase/firestore";
import Swal from 'sweetalert2'

export const login = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id, displayName
        }
    }
}

// let usrExistFirestore = false

export const loginGoogle = () => {

    return (dispatch) => {
        const auth = getAuth()       //* Función de FireBase que obtiene la authentication de Google y returna la info de quien se autentico
        signInWithPopup(auth, google)  //* Es una petición, hay distintos modos de visualización de signIn
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName))  //* Manda en el dispatch login los parametros desestructurados del user
                dispatch(registerUserAsync({
                    name: user.displayName,
                    email: user.email,
                    usrImg: user.photoURL,
                    uid: user.uid
                }))
                localStorage.setItem('userData', JSON.stringify({ email: user.email, uid: user.uid, name: user.displayName, usrImg: user.photoURL }))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const loginFacebook = () => {

    return (dispatch) => {
        const auth = getAuth()       //* Función de FireBase que obtiene la authentication de Google y returna la info de quien se autentico
        signInWithPopup(auth, facebook)  //* Es una petición, hay distintos modos de visualización de signIn
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName))  //* Manda en el dispatch login los parametros desestructurados del user
                localStorage.setItem('userData', JSON.stringify({ email: user.email, uid: user.uid, name: user.displayName, usrImg: user.photoURL }))
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                console.log('Bienvenido ' + user.displayName)
                localStorage.setItem('userData', JSON.stringify({ email: user.email, uid: user.uid, name: user.displayName, usrImg: user.photoURL }))
            })
            .catch(error => {
                console.log(error)
                console.log('El usuario no existe')
                Swal.fire('Error', error.code === 'auth/user-not-found' ?
                    'There is no user record corresponding to this identifier. The user may have been deleted.' :
                    error.code === 'auth/wrong-password' ? 'The password is invalid or the user does not have a  password.' :
                        '<strong>Invalid form!</strong><br> Please provide a value for the required fields in the form.', 'error')
            })
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        const auth = getAuth();
        await signOut(auth)
        dispatch(logout())
        localStorage.setItem('userData', '')
    }
}

export const logout = () => ({
    type: types.logout
})


//user exist in STORE? Funct
const isRegisteredAsync = (email) => {

    return async (dispatch) => {

        const userCollection = collection(db, "users");
        const q = query(userCollection, where("email", "==", email))
        const datos = await getDocs(q);
        console.log('query response', datos)

    }
}

//SAVING USER TO STORE
export const registerUserAsync = (newUser) => {

    return (dispatch) => {
        dispatch(isRegisteredAsync(newUser.email))
        addDoc(collection(db, "users"), newUser)
            .then(resp => {
                dispatch(registerUserSync(newUser))
                console.log("new User data", newUser)
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const registerUserSync = (newUser) => {
    return {
        type: types.register,
        payload: newUser
    }
}

//DELETING ACCOUNT (FIREBASE AUTH)
export const accountDeleteAsync = (user) => {
    return (dispatch) => {
        deleteUser(user)
            .then(() => {
                Swal.fire({
                    title: 'Eliminada',
                    text: 'Tu cuenta ha sido eliminada de nuestros registros',
                    icon: 'success',
                    confirmButtonColor: '#00bb9c',
                    confirmButtonText: 'Entendido',
                })
                console.log('cuenta eliminada')
                dispatch(accountDeleteSync())
                localStorage.setItem('userData', '')
            })
            .catch((err) => {
                console.log('error:', err)
            })
    }
}

export const accountDeleteSync = () => {
    return {
        type: types.delete,
        payload: {}
    }
}