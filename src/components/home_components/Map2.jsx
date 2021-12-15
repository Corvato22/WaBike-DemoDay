import React, { useEffect, useState, useRef } from "react";
import {
  TileLayer,
  MapContainer,
  LayersControl,
  LayerGroup,
  Marker,
  Popup
} from "react-leaflet";

import L from "leaflet";
// Import the routing machine JS and CSS:
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
// import { Button } from "@chakra-ui/react";
import stations from "../../data/data";

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const Map2 = () => {

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
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Markers">
            <LayerGroup>
              {stations.map(station => (
                <Marker position={[station.lat, station.lng]}>
                  <Popup>{station.station}</Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map2;
