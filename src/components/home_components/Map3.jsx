import React, { useState, useEffect } from "react";
import {
    TileLayer,
    Marker,
    Tooltip,
    GeoJSON,
    Polyline,
    MapContainer
} from "react-leaflet";
import axios from "axios";
const PathFinder = require("geojson-path-finder");


export const CityMap = (props) => {

    //Coodrinate initialization
    const [start, setStart] = useState([6.244520010584636, -75.58937196626917])
    const [end, setEnd] = useState([6.260312966884926, -75.57740193426602])

    const [coords, setcoords] = useState({ lat: 36.710576, lng: -4.450445 });
    const [hasLocation, sethasLocation] = useState(false);
    const [markerCoords, setmarkerCoords] = useState({
        lat: 0.0,
        lng: 0.0
    });


    //GET CURRENNT LOCATION JS LOCATION API
    navigator.geolocation.getCurrentPosition(
        function (position) {
            
            // setEnd([position.coords.longitude - 0.001701, position.coords.latitude - 0.000386])
            setStart(start=> ([position.coords.longitude, position.coords.latitude]))
            console.log('position obj from geoLocation', start)
        }
    )

    const [geojsonMark, setgeojsonMark] = useState(null);

    function findRouteThroughAGeoJson(origin, destiny, geojsonData) {
        let pathFinder = new PathFinder(geojsonData);
        console.log('origin location', origin)
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

    const filteredJSON = (feature) => {
        return feature.geometry.type === "LineString";
    };

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/dashgrn/wabike-GeoJson/main/Ciclorutas.geojson")
            .then((response) => {
                console.log("response", response);
                let filteredGeoJSON = response.data;
                filteredGeoJSON.features = response.data.features.filter(filteredJSON);
                filteredGeoJSON.totalFeatures = filteredGeoJSON.features.length;
                console.log("puntos totales en geoJSON", filteredGeoJSON.totalFeatures);
                console.log("geoJSON filtrado", filteredGeoJSON);

                let path = findRouteThroughAGeoJson(
                    filteredGeoJSON.features[1].geometry.coordinates[0],
                    filteredGeoJSON.features[30].geometry.coordinates[0],
                    filteredGeoJSON
                );
                
                setgeojsonMark(path);
                console.log("path vector",geojsonMark);
            });
    }, []);

    const handleClick = (ev) => {
        sethasLocation(true);
        setmarkerCoords({ lat: ev.latlng.lat, lng: ev.latlng.lng });
    };

    const marker = hasLocation ? (
        <Marker position={markerCoords}>
            <Tooltip>
                Latitude: {markerCoords.lat}
                <br />
                Longitude: {markerCoords.lng} <br />
                Marker
            </Tooltip>
        </Marker>
    ) : null;

    const geojson =
        geojsonMark !== null ? (
            <Polyline
                weight={4}
                positions={geojsonMark.map((value) => [value[1], value[0]])}
                color={"#00BB9C"}
            />
        ) : null;

    return (
        <MapContainer center={[6.256, -75.59]} zoom={15} onClick={handleClick}>
            <TileLayer
                attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
                url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu'
            // url="https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png"
            />
            {marker}
            {geojson}
        </MapContainer>
    );



    // <Map center={[33.5024, 36.2988]} zoom={14} ref={this.saveMap}>
    //     <TileLayer url="https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/256/{z}/{x}/{y}.png?key=gR2UbhjBpXWL68Dc4a3f" />
    //     {this.state.isMapInit && <Routing map={this.map} />}
    // </Map>
}