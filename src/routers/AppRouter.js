import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../containers/Home'
import { Login } from '../containers/Login'
import { SignUp } from '../containers/SignUp'
import { SplashScreen } from '../containers/SplashScreen'
import { MyAccount } from '../components/account_components/MyAccount'
import { Settings } from '../containers/Settings'
import { RoutesHistory } from '../containers/RoutesHistory'
import { login } from '../actions/loginAction';
import { useDispatch } from 'react-redux';
import MyLocation from '../containers/MyLocation'
import MyLocation2 from '../containers/MyLocation2'
// import { PrivateRoute } from './PrivateRoute'
// import { PublicRoute } from './PublicRoute'

const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      //si el user?.uid existe significa que estoy auntenticado
      //el signo ? evalua si el user tiene algo pregunta si existe el uid
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
    })

  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking) {
    return (
      <h1>Espere...</h1>
    )
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/mylocation"
            
            element={<MyLocation />} />
          <Route
            path="/mylocation2"
            
            element={<MyLocation2 />} />
          <Route
            path="/login"
            
            element={<Login />} />
          <Route
            path="/signup"
            
            element={<SignUp />} />
          <Route
            path="/myaccount"
            
            element={<MyAccount />} />
          <Route
            path="/settings"
            
            element={<Settings />} />
          <Route
            path="/history"
            
            element={<RoutesHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
