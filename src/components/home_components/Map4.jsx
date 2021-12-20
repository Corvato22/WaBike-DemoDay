import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../../context/SocketContext'

import { useMapbox } from '../../hooks/useMapbox'


const ptoInit = {
    lng: -75.5635,
    lat: 6.2518,
    zoom: 13.5
}
export const MapReport = () => {

    const { setRef, coords, newMarker$, movMarker$, addMarker, updateLocation } = useMapbox(ptoInit)
    const { socket } = useContext( SocketContext );
    
    //Escuchar los marcadores existentes
    useEffect(() => {

        socket.on('active-markers', (markers) => {
            for(const key of Object.keys(markers)){
                addMarker(markers[key], key)
            }
        })

    }, [socket, addMarker])
    
    //nuevo marcador
    useEffect(() => {
        newMarker$.subscribe( marker =>{
            socket.emit('new-marker', marker)
        })
    }, [newMarker$, socket])

    //movimiento marcadore
    useEffect(() => {
        movMarker$.subscribe( marker =>{
            socket.emit('updated-marker', marker)
        })
    }, [socket,movMarker$])

    //Mover marcador mediante sockets

    useEffect(() => {
        socket.on('updated-marker', (marker) =>{
            updateLocation(marker)
        })
    }, [socket, updateLocation])

    //Escuchar nuevos marcadores
    useEffect(() => {

        socket.on('new-marker', (marker) =>{
            addMarker(marker, marker.id)
        })

    }, [socket, addMarker])

    return (
        <>
            <div className='info'>
                Lng: {coords.lng} | Lat: {coords.lat} | zoom: {coords.zoom}
            </div>

          <div 
          //cuando se construya el elemento va a mandar la referencia que caera en el useMapbox ejecutando la función que establecera el nodo en el mapa
            ref={setRef}
            className='mapContainer'
          />

        
        </>
    )
}
