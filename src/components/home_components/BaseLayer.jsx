import React, { useState } from "react";
import { TileLayer, LayersControl } from "react-leaflet";

const BaseLayer = () => {
  const [maps, setMaps] = useState({
    base:
      "https://api.maptiler.com/maps/basic/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu",
    topo:
      "https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu",
    outdoor:
      "https://api.maptiler.com/maps/outdoor/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu",
    bright: 
    "https://api.maptiler.com/maps/bright/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu",
    pastel: 
    "https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu",
    streets: 
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu",
    topographique: 
    "https://api.maptiler.com/maps/topographique/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu",
    voyager: 
    "https://api.maptiler.com/maps/voyager/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu",

    toner: 
    "https://api.maptiler.com/maps/toner/{z}/{x}/{y}.png?key=Dw8w4nly4yujOdGMsjUu",     
    light: 
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    dark:
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
    
    });

  return (
    <>
      <LayersControl.BaseLayer checked name="Basic">
        <TileLayer
          attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
          url={maps.base}
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Topo">
        <TileLayer
          attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
          url={maps.topo}
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Outdoor">
        <TileLayer
          attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
          url={maps.outdoor}
        />
      </LayersControl.BaseLayer>      
      <LayersControl.BaseLayer checked name="Light">
            <TileLayer
              attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
              url={maps.light}
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Bright">
        <TileLayer
          attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
          url={maps.bright}
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Pastel">
        <TileLayer
          attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
          url={maps.pastel}
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Streets">
        <TileLayer
          attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
          url={maps.streets}
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Topographique">
        <TileLayer
          attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
          url={maps.topographique}
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="Voyager">
        <TileLayer
          attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
          url={maps.voyager}
        />
      </LayersControl.BaseLayer>

      <LayersControl.BaseLayer name="Toner">
        <TileLayer
          attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
          url={maps.toner}
        />
      </LayersControl.BaseLayer>
          <LayersControl.BaseLayer checked name="Dark">
            <TileLayer
              attribution='\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e \u003ca href=\"https://www.maptiler.com/copyright/ \"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright \"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e'
              url={maps.dark}
            />
          </LayersControl.BaseLayer>

    </>
  );
};

export default BaseLayer;