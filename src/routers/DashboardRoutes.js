import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MyAccount } from '../components/account_components/MyAccount'
import { Settings } from '../containers/Settings'
import { RoutesHistory } from '../containers/RoutesHistory'
import MyLocation from '../containers/MyLocation'
import MyLocation2 from '../containers/MyLocation2'
import { Home } from '../containers/Home'
import { Navigate } from 'react-router-dom';
import { TheftReport } from '../containers/TheftReport'


const DashboardRoutes = () => {
  return (
    <>

      <Routes>

        <Route path="/mylocation" element={<MyLocation />} />
        <Route path="/mylocation2" element={<MyLocation2 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/history" element={<RoutesHistory />} />
        <Route path="/report" element={<TheftReport />} />
        <Route path='/*' element={<Navigate to="/mylocation" />} />

      </Routes>

    </>
  )
}

export default DashboardRoutes