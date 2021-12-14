import { MapLayer } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet-routing-machine";
// import "lrm-google";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    const { map } = this.props;
    let leafletElement = Leaflet.Routing.control({
      waypoints: [
        Leaflet.latLng(6.253895279561762, -75.59030048378932),
        Leaflet.latLng(6.261048159210124, -75.57700172293764)
      ],
      lineOptions: {
          styles: [{ color: "#00BB9C", weight: 4 }]
      },
      show: false,
      addWaypoints: false,
      routeWhileDragging: true,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      showAlternatives: false
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
