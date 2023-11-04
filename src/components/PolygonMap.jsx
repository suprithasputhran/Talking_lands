import React from 'react';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { statesData } from '../data/us-state';


const center = [40.634631, -97.899696];

const PolygonMap = () => {
    const getColor = (d) => {
        return d > 1000 ? '#800026' :
            d > 500 ? '#BD0026' :
                d > 200 ? '#E31A1C' :
                    d > 100 ? '#FC4E2A' :
                        d > 50 ? '#FD8D3C' :
                            d > 20 ? '#FEB24C' :
                                d > 10 ? '#FED976' :
                                    '#FFEDA0';
    }
    return (
        <div className='absolute ml-80  my-10'>
            <MapContainer
                center={center} zoom={4} style={{ height: '600px', width: '950px' }}>
                <TileLayer
                    url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=xHeLo3wv74AqDywMWMrI"
                    attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                />
                {statesData.features.map(state => {
                    const coordinates = state.geometry.coordinates[0].map(item =>
                        [item[1], item[0]]);
                    return (<Polygon
                        pathOptions={{
                            fillColor: getColor(state.properties.density),
                            fillOpacity: 0.7,
                            weight: 2,
                            opacity: 1,
                            dashArray: '3',
                            color: '#FFFFFF'
                        }}
                        positions={coordinates}
                        eventHandlers={{
                            mouseover: (e) => {
                                const layer = e.target;

                                layer.setStyle({
                                    fillColor: getColor(state.properties.density),
                                    weight: 5,
                                    color: '#666',
                                    dashArray: '',
                                    fillOpacity: 0.7
                                });

                                layer.bringToFront();
                            },
                            mouseout: (e) => {
                                const layer = e.target;

                                layer.setStyle({
                                    fillColor: getColor(state.properties.density),
                                    fillOpacity: 0.7,
                                    weight: 2,
                                    color: 'FFFFFF',
                                    dashArray: '3'
                                });

                            },
                            click: (e) => {
                                map.fitBounds(e.target.getBounds());

                            }
                        }}
                    >
                        <Popup>
                            <div className='w-44 h-32 '>
                                <h1 className='font-bold text-lg'>Polpulation Density</h1>
                                <p className='font-bold text-base'>{state.properties.name}</p>
                                <div className='flex gap-2 items-center justify-center'><span className='font-bold'>{state.properties.density}</span><span>people per square mile</span></div>
                            </div>
                        </Popup>
                    </Polygon>

                    )
                })}

            </MapContainer></div>
    );
};

export default PolygonMap;