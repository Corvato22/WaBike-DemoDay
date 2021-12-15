const stations = [
    {
      station: "EnCicla - Area Metropolitana",
      lat: 6.242331983582845,
      lng: -75.57416546048825,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 0
    },
    {
      station: "EnCicla - Plaza de la libertad",
      lat: 6.24456827088988,
      lng: -75.57480366136573,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 180
    },
    {
      station: "EnCicla - Florida Nueva",
      lat: 6.253347550464268,
      lng: -75.59037591591337,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 325
    },
    {
      station: "EnCicla - Universidad",
      lat: 6.270226819768219,
      lng: -75.56530000057192,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 90
    },
    {
      station: "EnCicla - Floresta",
      lat: 6.258931944782689,
      lng: -75.59737673165289,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Robledo",
      lat: 6.273436742540098,
      lng: -75.59219380281739,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Punto Cero",
      lat: 6.265432946719246,
      lng: -75.5750123586407,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Batallón",
      lat: 6.262450283456629,
      lng: -75.59501754514679,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - San Pedro y San Pablo",
      lat: 6.258566955606823,
      lng: -75.59426718932357,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Los Colores",
      lat: 6.260243954835299,
      lng: -75.58513600281749,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Otra Banda",
      lat: 6.255860951710261,
      lng: -75.57930191815896,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "Encicla De La 51",
      lat: 6.263631288482377,
      lng: -75.59504608747606,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Orquídeas",
      lat: 6.26289827766133,
      lng: -75.58898218932354,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Moravia",
      lat: 6.27681428267643,
      lng: -75.56482546048817,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Campus Nacional",
      lat: 6.2606022492390085,
      lng: -75.57722187398217,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - SIU - UdeA",
      lat: 6.260731619464226,
      lng: -75.56717900281747,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Estadio",
      lat: 6.2537617928210425,
      lng: -75.58821200281753,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Suramericana",
      lat: 6.253210963050458,
      lng: -75.58268700281754,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla Parque Berrío",
      lat: 6.2510695459409735,
      lng: -75.56812260281748,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Museo de Antioquia",
      lat: 6.251841993019559,
      lng: -75.56879600281754,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - La 65",
      lat: 6.248964993109592,
      lng: -75.58345900281753,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - María Mulata",
      lat: 6.250543662947582,
      lng: -75.59471900281763,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Pedro Nel Gómez",
      lat: 6.246943323433065,
      lng: -75.59662500281756,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Málaga",
      lat: 6.246662228046102,
      lng: -75.56998370281755,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Parque de Los Mangos",
      lat: 6.245388328059979,
      lng: -75.58401873165302,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - San Juan",
      lat: 6.249040658194483,
      lng: -75.58858500281761,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Cisneros - Unaula",
      lat: 6.250613323168681,
      lng: -75.5748247316529,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "Encicla - San Antonio",
      lat: 6.247111093167575,
      lng: -75.56995661631144,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Parque de Las Luces II",
      lat: 6.245641988683726,
      lng: -75.57177373165291,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    },
    {
      station: "EnCicla - Primer Parque de Laureles",
      lat: 6.245953997754528,
      lng: -75.59381200281757,
      semimajor: 100000,
      semiminor: 60000,
      tilt: 300
    }
  ];
  
  export default stations;
  