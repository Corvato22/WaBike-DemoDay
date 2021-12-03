import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../containers/Home'
import { Login } from '../containers/Login'
import { SignUp } from '../containers/SignUp'
import { SplashScreen } from '../containers/SplashScreen'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
