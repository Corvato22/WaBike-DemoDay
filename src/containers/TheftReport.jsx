import React from 'react'
import {MapReport} from '../components/home_components/Map4'
import { MenuBar2 } from '../components/home_components/MenuBar2'
import { SocketProvider } from '../context/SocketContext'
export const TheftReport = () => {
    return (
        <>
        <MenuBar2 />
        <SocketProvider>
            <MapReport />
        </SocketProvider>
        </>
    )
}