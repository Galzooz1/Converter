import React, { Component, useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import '../css/map.css';
import 'leaflet/dist/leaflet.css';
import data from '../../assets/data.json';
import Markers from './VenueMarkers';


function MapsMap(props){
    let [currentLoc, setCurrenctLoc] = useState({lat:props.loc1 , lng: props.loc2});
    let [zoom, setZoom] = useState(7);
    useEffect( () => { 
    setCurrenctLoc({lat:props.loc1 , lng: props.loc2})
    console.log(currentLoc);
    
    },[props.loc1, props.loc2]);
    
    return(
        <div className="mt-2 map col">
        <MapContainer center={currentLoc} zoom={zoom}
        maxZoom={18}>
              <TileLayer 
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Markers venues={data.venues}/>
            </MapContainer>
       </div> 
    )
}

export default MapsMap