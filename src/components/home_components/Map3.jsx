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
    useToast,


} from '@chakra-ui/react';
import L from "leaflet";
import network from "../../data/network.json"
import BaseLayer from "./BaseLayer";
import stations from "../../data/enCicla";
import circles from '../../data/dangerZones'
import { SearchDestiny2 } from './SearchDestiny2.jsx'

const PathFinder = require("geojson-path-finder");


let id = 'test-toast'

export const CityMap = (props) => {

    let getUserData = localStorage.getItem('userData')
    let userData = JSON.parse(getUserData)


    let staId = Number(localStorage.getItem('sta'))

    const staSelected = (staId) => {
        return stations.find(sta => sta.id == staId)
    }

    let station = staSelected(staId)
    console.log(staId)
    console.log(station)


    const toast = useToast()




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


    //GPS MARKER SWITCH TO DRAGGABLE MARKER

    const POSITION_CLASSES = {
        bottomleft: 'leaflet-bottom leaflet-left',
        bottomright: 'leaflet-bottom leaflet-right',
        topleft: 'leaflet-top leaflet-left',
        topright: 'leaflet-top leaflet-right',
    }

    function SwitchToDraggableMarker({ position }) {
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

        // Memoize the minimap so it's not affected by position changes
        const minimap = useMemo(
            () => (
                <Box bg='white' w='44px' h='44px' display='flex' alignItems='center' justifyContent='center' borderRadius='6px' cursor='pointer' _hover={{ bg: '#dedede' }}>
                    <Image w='32px' opacity='0.7' src='https://res.cloudinary.com/dzyyi4p7x/image/upload/v1640063138/WaBike/compass-regular_fkukf1.svg'></Image>
                </Box>
            ),
            [],
        )

        const positionClass =
            (position && POSITION_CLASSES[position]) || POSITION_CLASSES.bottomright
        return (
            <div className={positionClass}>
                <div className="leaflet-control leaflet-bar">{minimap}</div>
            </div>
        )
    }


    //GENERATE MARKER FROM ACTUAL LOCATION
    const originPositionRef = useRef(null);

    const [markerDraggedOrigin, setMarkerDraggedOrigin] = useState(false)
    const eventHandlersOrigin = useMemo(
        () => ({
            dragend() {
                const marker = originPositionRef.current;
                if (marker != null) {
                    console.log(marker.getLatLng());
                    setCurrentPosition(marker.getLatLng())
                    setMarkerDraggedOrigin(true);
                }
            }
        }),
        []
    );
    function LocationMarker() {

        // const map = useMapEvents({
        //     click() {
        //         map.locate()
        //     },
        //     locationfound(e) {
        //         setCurrentPosition(e.latlng)
        //         map.flyTo(e.latlng, map.getZoom())
        //         console.log('current latlong: ', e.latlng)
        //     },
        // })

        return currentPosition === null ? null : (
            <Marker
                ref={originPositionRef}
                eventHandlers={eventHandlersOrigin}
                draggable={true}
                position={currentPosition}
                icon={markerOrigin}>
                <Popup>
                    <Center py={3}>
                        <Box
                            maxW={'100px'}
                            w='100px'
                            rounded={'md'}

                        >
                            <Image
                                src={userData.usrImg}
                                alt={userData.name}
                                rounded={'md'}
                                objectFit='cover'
                            />
                            <Center>
                                <Text
                                    color='#00BB9C'
                                    textTransform={'uppercase'}
                                    fontSize={'12px'}
                                    m='0px'
                                    fontWeight={800}>
                                    Estás aquí
                                </Text>
                            </Center>
                        </Box>
                    </Center>
                </Popup>
            </Marker>
        )
    }

    //DESTINATION MARKER
    const destinationPositionRef = useRef(null);

    const [x, setX] = useState(-75.57017775568262)
    const [y, setY] = useState(6.235342250684619)
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
            toast.closeAll()
            return patth.path;
        } else {
            console.log('path not found')
            if (!toast.isActive(2)) {
                if (patth === null) {
                    console.log('inside validation of toast')
                    toast({
                        id: 2,
                        title: 'Ups!',
                        description: "No pudimos encontrar un ruta exacta, intenta con una posición cercana",
                        status: 'info',
                        duration: 1000,
                        isClosable: true,
                    })
                }
            }
        }
    }


    //GETTING GEOJSON DATA WITH AXIOS GET FROM GITHUB and then GENERATING THE ROUTE 
    useEffect(() => {
        let path = findRouteThroughAGeoJson(
            [currentPosition.lng, currentPosition.lat],
            // [-75.6091868877411, 6.25872970393618],

            [x, y],
            network
        );
        console.log('currentPosition Obj: ', currentPosition)
        setgeojsonMark(geojsonMark => path);
        // if(station){
        //     setX(station.lon)
        //     setY(station.lat)
        // }

        // console.log("path vector", geojsonMark);

        //setting destiny marker location 
        // if(station){
        //     setX(station.lon)
        //     setY(station.lat)
        // }
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
                <SwitchToDraggableMarker position="bottomright" style={{ marginBottom: "40px" }} />
                <LayersControl position="topright">
                    <BaseLayer />
                    <LayersControl.Overlay checked name="Ciclorutas">
                        <LayerGroup>
                            {geoJsonPath}
                            <GeoJSON
                                data={network}
                                color={"#9fc6e0e2"}
                            />
                        </LayerGroup>
                    </LayersControl.Overlay>
                    <LocationMarker />
                    <DestinationMarker />

                    <LayersControl.Overlay name="Zonas de Alta Accidentalidad">
                        <LayerGroup>
                            {circles.map((area, i) => (
                                <Circle opacity={0.1} key={i} center={[area.lat, area.lng]} pathOptions={{ color: 'red' }} radius={150} />
                            ))}
                        </LayerGroup>
                    </LayersControl.Overlay>
                    <LayersControl.Overlay checked name="Estaciones EnCicla">
                        <LayerGroup>

                            {stations.map((station, i) => (
                                <Marker opacity={0.6} key={i} position={[station.lat, station.lon]} icon={markerIcon}>
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
                                                            alt={station.name}
                                                            rounded={'md'}
                                                            objectFit='cover'
                                                        /> :
                                                        <Image
                                                            src={station.picture}
                                                            alt={station.name}
                                                            rounded={'md'}
                                                            objectFit='cover'
                                                        />
                                                }
                                                <Box>
                                                    <Text
                                                        onClick={() => {
                                                            setX(station.lon)
                                                            setY(station.lat)
                                                        }}
                                                        color='#00BB9C'
                                                        textTransform={'uppercase'}
                                                        fontSize={'16px'}
                                                        fontWeight={800}
                                                        cursor='pointer'
                                                        _hover={{ textDecoration: 'underline' }}
                                                    >
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
