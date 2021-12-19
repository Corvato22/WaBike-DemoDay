import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    TileLayer,
    Marker,
    Tooltip,
    GeoJSON,
    Polyline,
    MapContainer,
    LayersControl,
    LayerGroup,
    useMapEvents,
    Popup,
    Circle
} from "react-leaflet";
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,


} from '@chakra-ui/react';
import L from "leaflet";
import network from "../../data/network.json"
import BaseLayer from "./BaseLayer";
import stations from "../../data/enCicla";
import circles from '../../data/dangerZones'
import { SearchDestiny2 } from './SearchDestiny2.jsx'

const PathFinder = require("geojson-path-finder");


export const CityMap = (props) => {
    const markerIcon = new L.Icon({
        iconUrl: 'https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639637700/WaBike/EnCicla_ct5b8v.svg',
        iconSize: [40, 40],
        iconAnchor: [17, 46], //[left/right, top/bottom]
        popupAnchor: [0, -46], //[left/right, top/bottom]

    })
    const markerOrigin = new L.Icon({
        iconUrl: 'https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639625137/WaBike/Current_location_sct7u6.svg',
        iconSize: [40, 40],
        iconAnchor: [17, 46], //[left/right, top/bottom]
        popupAnchor: [0, -46], //[left/right, top/bottom]

    })
    const markerDestiny = new L.Icon({
        iconUrl: 'https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639625137/WaBike/Destiny_location_f6nmay.svg',
        iconSize: [40, 40],
        iconAnchor: [17, 46], //[left/right, top/bottom]
        popupAnchor: [0, -46], //[left/right, top/bottom]

    })

    const [currentPosition, setCurrentPosition] = useState([-75.58779741288164, 6.241221838754799])

    //GENERATE MARKER FROM ACTUAL LOCATION
    function LocationMarker() {

        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setCurrentPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
                console.log('current latlong: ', e.latlng)
            },
        })

        return currentPosition === null ? null : (
            <Marker position={currentPosition} icon={markerOrigin}>
                <Popup>You are here</Popup>
            </Marker>
        )
    }

    //DESTINATION MARKER
    const destinationPositionRef = useRef(null);

    const [x, setX] = useState(-75.58781504631042)
    const [y, setY] = useState(6.253109277534587)
    const [markerDragged, setMarkerDragged] = useState(false)
    const eventHandlers = useMemo(
        () => ({
            dragend() {
                const marker = destinationPositionRef.current;
                if (marker != null) {
                    console.log(marker.getLatLng());
                    const { lat, lng } = marker.getLatLng();
                    setX(x => lng);
                    setY(y => lat);
                    setMarkerDragged(true);
                }
            }
        }),
        []
    );
    function DestinationMarker() {
        // const [destinationPosition, setDestinationPosition] = useState(center)
        // const markerRef = useRef(null)

        return (
            <Marker
                draggable={true}
                // position={destinationPosition}
                // ref={markerRef}>
                ref={destinationPositionRef}
                position={[y, x]}
                eventHandlers={eventHandlers}
                icon={markerDestiny}
            >
                <Popup>Destino</Popup>
            </Marker>
        )
    }


    //Coodrinate initialization
    const [start, setStart] = useState([])
    const [end, setEnd] = useState([6.260312966884926, -75.57740193426602])

    const [coords, setcoords] = useState({ lat: 36.710576, lng: -4.450445 });
    const [hasLocation, sethasLocation] = useState(false);
    const [markerCoords, setmarkerCoords] = useState({ lat: 0.0, lng: 0.0 });



    const [geojsonMark, setgeojsonMark] = useState(null);


    function findRouteThroughAGeoJson(origin, destiny, geojsonData) {
        let pathFinder = new PathFinder(geojsonData, { precision: 0.001 });
        console.log('origin location as ARGS', origin)
        console.log('origin destination as ARGS', destiny)
        let patth = pathFinder.findPath(
            {
                type: "GeoProperty",
                geometry: {
                    type: "Point",
                    coordinates: origin
                }
            },
            {
                type: "GeoProperty",
                geometry: {
                    type: "Point",
                    coordinates: destiny
                }
            }
        );
        console.log('path 44', patth)
        if (patth) {
            return patth.path;
        } else {
            console.log('path not found')
        }
    }


    //GETTING GEOJSON DATA WITH AXIOS GET FROM GITHUB and then GENERATING THE ROUTE 
    useEffect(() => {
        let path = findRouteThroughAGeoJson(
            [currentPosition.lng, currentPosition.lat],

            [x, y],
            network
        );
        console.log('currentPosition Obj: ', currentPosition)
        setgeojsonMark(geojsonMark => path);
        // console.log("path vector", geojsonMark);
    }, [x, y, currentPosition]);


    //PATH FROM PATH FINDER

    const geoJsonPath =
        geojsonMark !== null ? (
            <Polyline
                weight={4}

                positions={geojsonMark ? (geojsonMark.map((value) => [value[1], value[0]])) : []}
                color={"#00BB9C"}
            />
        ) : null;

    return (
        <>
            <SearchDestiny2 setX={setX} setY={setY} />
            <MapContainer center={[6.256, -75.59]} zoom={15} >
                <LayersControl position="topright">
                    <BaseLayer />
                    <LayersControl.Overlay checked name="network">
                        <LayerGroup>
                            <TileLayer
                                attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
                                url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu'
                            />

                            {geoJsonPath}
                            <GeoJSON
                                data={network}
                                color={"#9fc6e0e2"}
                            />
                        </LayerGroup>
                    </LayersControl.Overlay>
                    <LocationMarker />
                    <DestinationMarker />

                    <LayersControl.Overlay checked name="Circles">
                        <LayerGroup>
                            {circles.map((area, i) => (
                                <Circle key={i} center={[area.lat, area.lng]} pathOptions={{ color: 'red' }} radius={150} />
                            ))}
                        </LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay checked name="Markers">
                        <LayerGroup>

                            {stations.map((station, i) => (
                                <Marker key={i} position={[station.lat, station.lon]} icon={markerIcon}>
                                    <Popup>
                                        <Center py={3}>
                                            <Box
                                                maxW={'250px'}
                                                w='250px'
                                                rounded={'md'}
                                            >{

                                                    station.picture === "0" ?
                                                        <Image
                                                            src={'https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639886877/WaBike/Enclicla_no_disponible_s0rq6p.png'}
                                                            alt={station.nameZona}
                                                            rounded={'md'}
                                                            objectFit='cover'
                                                        /> :
                                                        <Image
                                                            src={station.picture}
                                                            alt={station.nameZona}
                                                            rounded={'md'}
                                                            objectFit='cover'
                                                        />
                                                }
                                                <Box>
                                                    <Text
                                                        color='#00BB9C'
                                                        textTransform={'uppercase'}
                                                        fontSize={'16px'}
                                                        fontWeight={800}>
                                                        {station.name}
                                                    </Text>
                                                    <Text
                                                        color={'#242E42'}
                                                        textTransform={'uppercase'}
                                                        fontSize={'11px'}>
                                                        {station.address}
                                                    </Text>

                                                    {
                                                        station.description === "0" ?
                                                            <Text color={'gray.500'}>
                                                                {'Indicación no disponible'}
                                                            </Text>
                                                            :
                                                            <Text color={'gray.500'}>
                                                                {station.description}
                                                            </Text>
                                                    }
                                                </Box>
                                            </Box>
                                        </Center>
                                    </Popup>
                                </Marker>
                            ))}
                        </LayerGroup>
                    </LayersControl.Overlay>
                </LayersControl>
            </MapContainer>
        </>
    );
}