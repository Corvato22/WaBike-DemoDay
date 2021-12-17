import React, { useState, useEffect, useRef, useMemo } from "react";
import {
    TileLayer,
    Marker,
    Tooltip,
    GeoJSON,
    Polyline,
    MapContainer,
    LayerGroup,
    useMapEvents,
    Popup
} from "react-leaflet";

import network from "../../data/network.json"

const PathFinder = require("geojson-path-finder");


export const CityMap = (props) => {

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
            <Marker position={currentPosition}>
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
    }, [x, y]);


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
        <MapContainer center={[6.256, -75.59]} zoom={15} >
            <TileLayer
                attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
                url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu'
            />

            {geoJsonPath}
            <GeoJSON
                data={network}
                color={"#9fc6e0e2"}
            />
            <LocationMarker />
            <DestinationMarker />
        </MapContainer>
    );
}