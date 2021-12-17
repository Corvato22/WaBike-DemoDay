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
import axios from "axios";
import network from "../../data/network.json"

const PathFinder = require("geojson-path-finder");

let geoJSONNetwork = undefined
let dataNetwork = []

export const CityMap = (props) => {

    const [currentPosition, setCurrentPosition] = useState(null)

    //GENERATE MARKER FROM ACTUAL LOCATION
    function LocationMarker() {
        
        const map = useMapEvents({
            click() {
                map.locate()
            },
            locationfound(e) {
                setCurrentPosition(e.latlng)
                map.flyTo(e.latlng, map.getZoom())
                console.log('current latlong: ',e.latlng)
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
              setX(x =>lng);
              setY(y =>lat);
              setMarkerDragged(true);
            }
          }
        }),
        []
      );
    // const center = {
    //     lat: 6.272494278000583,
    //     lng: -75.56239915620594,
    // }
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
    const [markerCoords, setmarkerCoords] = useState({lat: 0.0,lng: 0.0});



    const [geojsonMark, setgeojsonMark] = useState(null);

    
    function findRouteThroughAGeoJson(origin, destiny, geojsonData) {
        let pathFinder = new PathFinder(geojsonData, {precision: 0.002});
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
        // console.log('path 44', path)
        return patth.path;
    }

    //FILTERING FUNCTION -- PASED AS CALLBACK TO FILTER METHOD.
    const filteredJSON = (feature) => {
        return feature.geometry.type === "LineString";
    };

    //GETTING GEOJSON DATA WITH AXIOS GET FROM GITHUB and then GENERATING THE ROUTE 
    useEffect(() => {
        // axios.get("https://raw.githubusercontent.com/dashgrn/wabike-GeoJson/main/Ciclorutas.geojson")
        //     .then((response) => {
        //         console.log("response", response);
        //         let filteredGeoJSON = response.data;
        //         filteredGeoJSON.features = response.data.features.filter(filteredJSON);
        //         filteredGeoJSON.totalFeatures = filteredGeoJSON.features.length;
        //         console.log("puntos totales en geoJSON", filteredGeoJSON.totalFeatures);
        //         console.log("geoJSON filtrado", filteredGeoJSON);

        //         geoJSONNetwork = filteredGeoJSON
        //     });
            let path = findRouteThroughAGeoJson(
                [-75.59022903442383, 6.260355905076092],
                // filteredGeoJSON.features[1].geometry.coordinates[0],
                // filteredGeoJSON.features[30].geometry.coordinates[0],
                // [-75.59022903442383, 6.260355905076092],
                [x,y],
                network
            );

            setgeojsonMark(geojsonMark => path);
            // console.log("path vector", geojsonMark);
    }, [x,y]);

    // const handleClick = (evt) => {
    //     console.log('click evt', evt)
    //     sethasLocation(true);
    //     setmarkerCoords({ lat: evt.latlng.lat, lng: evt.latlng.lng });
    // };

    // const marker = hasLocation ? (
    //     <Marker position={markerCoords}>
    //         <Tooltip>
    //             Latitude: {markerCoords.lat}
    //             <br />
    //             Longitude: {markerCoords.lng} <br />
    //             Marker
    //         </Tooltip>
    //     </Marker>
    // ) : null;


    //PATH FROM PATH FINDER
   
    const geoJsonPath =
        geojsonMark !== null ? (
            <Polyline
                weight={4}
                positions={geojsonMark.map((value) => [value[1], value[0]])}
                color={"#00BB9C"}
            />
        ) : null;

    return (
        <MapContainer center={[6.256, -75.59]} zoom={15} >
            <TileLayer
                attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
                url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu'
            />
            {/* {marker} */}
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