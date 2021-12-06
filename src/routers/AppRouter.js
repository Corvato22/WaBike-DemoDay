import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../containers/Home'
import { Login } from '../containers/Login'
import { SignUp } from '../containers/SignUp'
import { SplashScreen } from '../containers/SplashScreen'
import { MyAccount} from '../components/account_components/MyAccount'
import { Settings } from '../containers/Settings'
import { RoutesHistory } from '../containers/RoutesHistory'
import MyLocation from '../containers/MyLocation'
import MyLocation2 from '../containers/MyLocation2'

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/mylocation" element={<MyLocation />} />
          <Route path="/mylocation2" element={<MyLocation2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/history" element={<RoutesHistory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
