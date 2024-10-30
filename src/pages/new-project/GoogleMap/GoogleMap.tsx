import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents, useMap } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

// Extend L.Control to include geocoder
declare module 'leaflet' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Control {
    function geocoder(options?: unknown): unknown;
  }
}
import 'leaflet-control-geocoder';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet/dist/leaflet.css';
import { Coordinates } from "../../../Types";


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

// Custom hook for adding the geocoder control
function AddGeocoder() {
  const map = useMap();
  
  useEffect(() => {
    // Add geocoder to the map
    const geocoder = L.Control.geocoder({
      defaultMarkGeocode: false,
    }) as L.Control;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (geocoder as any).on('markgeocode', (e: { geocode: { center: LatLngExpression; }; }) => {
      const latlng = e.geocode.center as LatLngExpression;
      map.setView(latlng, 13);
      L.marker(latlng).addTo(map);
    })
    .addTo(map);

    return () => {
      map.removeControl(geocoder);
    };
  }, [map]);

  return null;
}


function GoogleMap({ coordinates, setCoordinates }: Coordinates) {
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
        <AddGeocoder />
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
