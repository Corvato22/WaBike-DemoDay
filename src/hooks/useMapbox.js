import { useCallback, useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import {v4} from 'uuid'
import { Subject } from 'rxjs'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWZwcmlldG9hIiwiYSI6ImNreGRyMzJ0NzB0MjYyb280a2pqdTdkenoifQ.erAiarKp4ZfZrO4gRgiUlA'

export const useMapbox = (ptoInit) => {

        //mantendra la referencia sin importar que componente se vaya a redibujar
        const mapDiv = useRef()
        //memoriza el resultado de la función
        // recibiendo el nodo en el cual se reenderiza el mapa, sin dependencia
        const setRef = useCallback( (node) =>{
            //ayuda a tener la referencia al mapa
            mapDiv.current = node;
        },[])
        //Referencia a los marcadores
        const markers = useRef({})

        //Observables de Rxjs
        //Subject , facilidad de subscribirme y emitir valores en cualquier lugar que yo quiera
        const movMarker = useRef(new Subject());
        const newMarker = useRef(new Subject());

        
        
        // const [mapBox, setMapBox] = useState()
        //Mapa y coors
        const mapBox = useRef()
        const [coords, setCoords] = useState(ptoInit)
        
        //función para agregar marcadores
        const addMarker = useCallback((ev, id)=>{
            //capturar la longitud y latitud con el evento click
            const {lng,lat} = ev.lngLat || ev;
            
            const el = document.createElement('div');
            el.className = 'marker';
            //crear marcador
            const marker = new mapboxgl.Marker(el)
            //se ocupara un uuid único para establecer un identificador único al marcador
            marker.id =id ?? v4()

            

            marker
                .setLngLat([lng, lat])
                .addTo(mapBox.current)
                .setDraggable(true)
            //Asignamos al objeto de marcadore
            markers.current[marker.id] = marker

            
            if(!id){
                //si el marcardor tine id no emitir
                newMarker.current.next({
                id: marker.id,
                lng, 
                lat
            })  
            }


            //escuchar movimientos del marcador
            marker.on('drag', ({target})=>{
                const { id } = target
                const { lng, lat } = target.getLngLat()

                //emite los cambios del marcador
                movMarker.current.next({ id, lng, lat })
            })
        }, [])
        
        //Función para actualizar la ubicación del marcadores
        const updateLocation = useCallback( ({id, lng, lat}) => {
            markers.current[id].setLngLat([ lng, lat ]);
        }, [])


        //se dispara n cantidad de veces dependiendo las condiciones de sus argumentos o sus dependencias
        useEffect(() => {
            const map = new mapboxgl.Map({
                container: mapDiv.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [ptoInit.lng, ptoInit.lat],
                zoom: ptoInit.zoom
            })
            // setMapBox(map)
            mapBox.current = map
        }, [ptoInit])
    
        //evento listener, se obtiene la info cada vez que se mueva el mapa
        //cuando se mueve el mapa
        useEffect(() => {
            mapBox.current?.on('move', ()=>{
                const { lng,lat } = mapBox.current.getCenter()
                setCoords({
                    lng: lng.toFixed(4),
                    lat: lat.toFixed(4),
                    zoom: mapBox.current.getZoom().toFixed(2)
                })
            })
        
        },[])
 //Agregar marcadores cuando se hace click
        useEffect(() =>{
            mapBox.current?.on('click', (ev) =>{
                addMarker(ev)
            })
        }, [addMarker])


//toda la lógica está en un customHook que esta exportando las coordenadas y una función que establece en que div se reenderizará el mapa
    return {
        addMarker,
        updateLocation,
        coords,
        markers,
        //$ significa que es un observable
        newMarker$: newMarker.current,
        movMarker$: movMarker.current,
        setRef
    }
}
 