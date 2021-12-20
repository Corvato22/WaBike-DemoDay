import React from 'react'
// import MapComponent from '../components/home_components/Map2'
import {CityMap} from '../components/home_components/Map3'
import { MenuBar } from '../components/home_components/MenuBar'

export const Home = () => {
    return (
        <>
            <MenuBar />
            <CityMap />
        </>
    )
}
