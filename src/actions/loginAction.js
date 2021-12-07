import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth"
import { google, facebook} from "../firebase/firebase"
import { types } from "../types/types"

export const login = (id, displayName) => {
    return {
        type: types.login,
        payload: {
            id, displayName
        }
    }
}

export const loginGoogle = () => {

    return (dispatch) => {
        const auth = getAuth()       //* Función de FireBase que obtiene la authentication de Google y returna la info de quien se autentico
        signInWithPopup(auth, google)  //* Es una petición, hay distintos modos de visualización de signIn
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName))  //* Manda en el dispatch login los parametros desestructurados del user
            })
            .catch(err => {
                console.log(err);
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
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const loginEmailPassword = (email, password) =>{
    return(dispatch) =>{
        const auth= getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then (({user})=>{
            dispatch(login(user.uid, user.displayName))
            console.log('Bienvenido ' + user.displayName)
        })
        .catch(e=>{
            console.log(e)
            console.log('El usuario no existe')
        })
    }
}