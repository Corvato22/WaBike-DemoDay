import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import Routing from "../../helpers/RoutingMachine";


class MapComponent extends Component {
  state = {
    isMapInit: false
  };

  saveMap = (map) => {
    this.map = map;
    this.setState({ isMapInit: true });
  };

  render() {
    return (
      <Map center={[6.256, -75.590]} zoom={14} ref={this.saveMap}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer url="https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/256/{z}/{x}/{y}.png?key=gR2UbhjBpXWL68Dc4a3f" /> */}
        {this.state.isMapInit && <Routing map={this.map} />}
      </Map>
    );
  }
}

export default MapComponent;