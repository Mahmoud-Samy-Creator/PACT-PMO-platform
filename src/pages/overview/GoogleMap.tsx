import { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

// =========== Egypt ===========
const center: LatLngExpression = {
  lat: 26.8206,
  lng: 30.8025,
};

interface LocationMarkerProps {
  onClick: (lat: number, lng: number) => void;
}

function LocationMarker({ onClick }: LocationMarkerProps) {
  const [position, setPosition] = useState<LatLngExpression | null>(null);

  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      onClick(lat, lng);
    },
  });

  return position === null ? null : (
    <Marker position={position}></Marker>
  );
}

interface Coordinates {
  lat: number;
  lng: number;
}

function GoogleMap() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  const handleMapClick = (lat: number, lng: number) => {
    console.log(`Latitude: ${lat}, Longitude: ${lng}`);
    setCoordinates({ lat, lng });
  };

  return (
    <div>
      <MapContainer
        center={center}
        zoom={6}
        style={{ height: '450px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker onClick={handleMapClick} />
      </MapContainer>

      {coordinates && (
        <div className="coordinates">
          <p>Clicked Coordinates:</p>
          <p>Latitude: {coordinates.lat}</p>
          <p>Longitude: {coordinates.lng}</p>
        </div>
      )}
    </div>
  );
}

export default GoogleMap;
