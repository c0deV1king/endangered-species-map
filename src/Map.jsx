import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [-15.782, 153.350]; // Example coordinates (latitude, longitude)

  return (
    <MapContainer
      center={position}
      zoom={5}
      style={{ height: '90vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      <Marker position={position}>
        <Popup>
          A popup for the marker.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
