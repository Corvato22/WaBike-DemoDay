import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../containers/Home'
import { Login } from '../containers/Login'

const RoutesApp = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default RoutesApp
