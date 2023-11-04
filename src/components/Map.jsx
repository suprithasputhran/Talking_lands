import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markericon from '../assets/marker.png'
import { citiesData } from '../data/cities';

const center = [12.9716, 77.5946];
const markerIcon = new L.Icon({
    iconUrl: markericon,
    iconSize: [20, 35],
    iconAnchor: [11, 39],
    popupAnchor: [0, -46]
})

function Map() {
    return (
        <div className='absolute ml-80 my-10 '>
            <MapContainer
                center={center} zoom={5} style={{ height: '600px', width: '950px' }}>
                <TileLayer
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=xHeLo3wv74AqDywMWMrI"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />

                {citiesData.map(city =>
                    <Marker position={[city.lat, city.lon]} icon={markerIcon}>
                        <Popup>
                            <p className=" font-Roboto text-lg " key={city.id}>{city.description}</p>
                        </Popup>
                    </Marker>)}


            </MapContainer></div>
    );


}

export default Map