import React from 'react'
import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import GeoCoderMarker from '../GeoCoderMarker/GeoCoderMarker'

const Map = ({address,city,country}) => {
  return (
    <MapContainer
      center={[41.35, 18.8]}
      zoom={1.5}
      style={{ height: "40vh", width: "100%", marginTop: "20px", zIndex:0 }}
    >
      <TileLayer 
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  )
}

export default Map