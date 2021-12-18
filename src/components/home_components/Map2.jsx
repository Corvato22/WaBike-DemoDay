import React, { useEffect, useState, useRef } from "react";
import {
  TileLayer,
  MapContainer,
  LayersControl,
  LayerGroup,
  Marker,
  Popup,
  Polygon,
  Circle,
  CircleMarker
} from "react-leaflet";


import L from "leaflet";
// Import the routing machine JS and CSS:
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
// import { Button } from "@chakra-ui/react";
import stations from "../../data/data";
import zones from "../../data/data_dangerZones";
import circles from "../../data/data_dangerZones_2";

// const maps = {
//   base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// };


const Map2 = () => {
  //Custom markers
  const markerIcon = new L.Icon({
    iconUrl: 'https://res.cloudinary.com/dzyyi4p7x/image/upload/v1639637700/WaBike/EnCicla_ct5b8v.svg',
    iconSize: [40, 40],
    iconAnchor: [17, 46], //[left/right, top/bottom]
    popupAnchor: [0, -46], //[left/right, top/bottom]

  })

  // The map instance:
  const [map, setMap] = useState(null);

  // Start-End point for the routing machine

  //Coodrinate initialization
  const [start, setStart] = useState([6.244520010584636, -75.58937196626917])
  const [end, setEnd] = useState([6.260312966884926, -75.57740193426602])
  const [routingMachine, setRoutingMachine] = useState(null)

  // Routing machine ref
  const RoutingMachineRef = useRef(null)



  // Create the routing-machine instance:
  useEffect(() => {

    // handleLocation()

    if (!map) return
    if (map) {
      RoutingMachineRef.current = L.Routing.control({
        position: 'topleft',
        lineOptions: {
          styles: [
            {
              color: '#00BB9C',
            },
          ],
        },
        waypoints: [start, end],
      })
      setRoutingMachine(RoutingMachineRef.current)
    }
    // eslint-disable-next-line
  }, [map])

  // Set waypoints when start and end points are updated:
  useEffect(() => {
    if (routingMachine) {
      routingMachine.addTo(map)
      routingMachine.setWaypoints([start, end])
    }
    console.log(start, typeof (start))
    console.log(end, typeof (end))
    // eslint-disable-next-line
  }, [routingMachine, start, end])

  // Update start and end points on button click:
  const handleClick = () => {
    setStart([6.2538572262747385, -75.58987793870918])
    setEnd([6.244520010584636, -75.58937196626917])
    // navigator.geolocation.getCurrentPosition(

    //   function (position) {
    //     console.log(position)
    //     console.log(position.coords.longitude, typeof (position.coords.longitude))
    //     console.log(position.coords.latitude, typeof (position.coords.latitude))
    //     setEnd([position.coords.longitude - 0.001701, position.coords.latitude - 0.000386])
    //     setStart([position.coords.longitude, position.coords.latitude])

    //   }
    // )
    //const handleClick = () => {
    // if (start[0] === 6.2538572262747385) {
    //   setStart([6.2538572262747385, -75.58987793870918])
    //   setEnd([6.260312966884926, -75.57740193426602])
    // }
    // if (start[0] === 6.2538572262747385) {
    //   setStart([6.2538572262747385, -75.58987793870918])
    //   setEnd([6.244520010584636, -75.58937196626917])
    // }
  }

  // const polygon = [
  //   [6.247590950562071, -75.57856554947973],
  //   [6.246103282820813, -75.57903904787744],
  //   [6.244886730350713, -75.57508547058184],
  //   [6.246395051953209, -75.57468391897791],
  //   [6.246911058068498, -75.57499289308605],
  //   [6.248119342990826, -75.57496812134588],
  //   [6.248137179524584, -75.57543076112856],
  //   [6.247223700120601, -75.57544309469864],
  //   [6.246898760762242, -75.57562813855728],
  //   [6.246757377565775, -75.57594349114231],
  //   [6.247590950562071, -75.57856554947973]
  // ]

  return (
    <>
      {/* <Button size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='green.500'
        onClick={handleClick}>Change Waypoints</Button> */}
      <MapContainer
        center={[6.256, -75.590]}
        zoom={12}
        zoomControl={false}
        style={{ height: "100vh", width: "100%", padding: 0 }}
        // Set the map instance to state when ready:
        whenCreated={map => setMap(map)}
      >
        {/* <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl> */}
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
              url='https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu'
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Markers">
            <LayerGroup>
              {stations.map((station, i) => (
                <Marker key={i} position={[station.lat, station.lng]} icon={markerIcon}>
                  <Popup>{station.station}</Popup>
                </Marker>
              ))}

              {/* {zones.map((zones, i) => (
                <Polygon key={i} pathOptions={redOptions} positions={zones.polygon} />
              ))} */}

              {circles.map((area, i) => (
                <Circle key={i} center={[area.lat, area.lng]} pathOptions={{ color: 'red' }} radius={150} />
              ))}

              {/* <Circle key={i} center={[area.lat, area.lng]} pathOptions={purpleOptions} radius={200} /> */}

            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map2;
