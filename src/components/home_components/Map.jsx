import React, { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import styled from 'styled-components'

const ContainerMap = styled.div`
     width:100%;
     height:600px;
`

export const Map = () => {

    const [state, setState] = useState({
        longitude: 0,
        latitude: 0
    })

    useEffect(() => {
        handleLocation()
    }, [])

    const handleLocation = () => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                setState({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            }
        )
    }

    return (
        <>
            <ContainerMap>
                <MapContainer center={[6.256, -75.590]} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[state.latitude, state.longitude]}>
                        <Popup>
                            Su ubicación
                        </Popup>
                    </Marker>
                </MapContainer>
            </ContainerMap>
        </>
    )
}