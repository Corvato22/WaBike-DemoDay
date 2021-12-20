import React, { useState } from "react";
import { TileLayer, LayersControl } from "react-leaflet";

const BaseLayer = () => {
  const [maps, setMaps] = useState({
    light:
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    dark:
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    pastel:
      "https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu"

  });

  return (
    <>
      <LayersControl.BaseLayer  name="Información">
        <TileLayer
          url={maps.light}
        />
      </LayersControl.BaseLayer>



      <LayersControl.BaseLayer name="Satelite">
        <TileLayer
          url={maps.dark}
        />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer checked name="WaBike">
        <TileLayer
          url={maps.pastel}
        />
      </LayersControl.BaseLayer>
    </>
  );
};

export default BaseLayer;
