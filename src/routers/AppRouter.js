import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import DashboardRoutes from './DashboardRoutes'
import { PrivateRoute } from './PrivateRouter'
import { PublicRoute } from './PublicRouter'
import { Login } from '../containers/Login'
import { SignUp } from '../containers/SignUp'
import { SplashScreen } from '../containers/SplashScreen'
import { useDispatch } from 'react-redux'
import { getAuth, onAuthStateChanged } from '@firebase/auth'
// import { loginEmailPassword } from '../actions/loginAction'

const AppRouter = () => {
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            console.log(user ? 'Logueado' : 'No Logueado');
            //si el user?.uid existe significa que estoy auntenticado
            //el signo ? evalua si el user tiene algo pregunta si existe el uid
            if (user?.uid) {
                //dispatch(loginEmailPassword(user.uid, user.displayName));    //? ¿Para qué era?
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })

    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>espere...</h1>
        )
    }


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <PublicRoute isAuthenticated={isLoggedIn}>
                            <SplashScreen />
                        </PublicRoute>
                    } />

                    <Route path="/login" element={
                        <PublicRoute isAuthenticated={isLoggedIn}>
                            <Login />
                        </PublicRoute>
                    } />
                    <Route path="/signup" element={
                        <PublicRoute isAuthenticated={isLoggedIn}>
                            <SignUp />
                        </PublicRoute>
                    } />
                    <Route path="/*" element={
                        <PrivateRoute isAuthenticated={isLoggedIn}>
                            <DashboardRoutes />
                        </PrivateRoute>
                    } />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter
