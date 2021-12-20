import React from 'react'
import {MapReport} from '../components/home_components/Map4'
import { MenuBar } from '../components/home_components/MenuBar'
import { SocketProvider } from '../context/SocketContext'
export const TheftReport = () => {
    return (
        <>
        <MenuBar />
        <SocketProvider>
            <MapReport />
        </SocketProvider>
        </>
    )
}