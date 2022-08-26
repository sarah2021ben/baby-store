import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect } from 'react';
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FyYWgyNSIsImEiOiJja3EyaHQ3b2YwaXN0MnJwZnRwcThyNDdxIn0.bvi7Z6VCQdxEhvn8d-CoUA';


const Map = ()=>{
 
    const mapContainer = useRef(null);
    const map = useRef(null);
    
    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [3.042048, 36.752887],
        zoom: 9
        });
        /*const positionMarker = new mapboxgl.Marker()
              .setLngLat([3.042048, 36.752887])
              .addTo(map.current);*/
        },[]);
        

    return(
        <div>
            <div ref={mapContainer} className="map-container" style={{height: '300px'}} />
        </div>
    )
}
export default Map