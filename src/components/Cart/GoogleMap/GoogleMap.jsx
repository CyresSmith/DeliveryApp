import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  DirectionsRenderer,
} from '@react-google-maps/api';

import { useState } from 'react';

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

import Box from 'components/shared/Box';
import { useEffect } from 'react';
import { Info, MapBox } from './GoogleMap.styled';

import theme from 'theme';

const libraries = ['places'];

function App({ Destination, ActiveSeller }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAPS_API_KEY,
    libraries,
  });

  const [Center, setCenter] = useState(null);
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    if (!ActiveSeller || Center) {
      return;
    }

    (async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
            ActiveSeller.plusCode
          )}&key=${MAPS_API_KEY}`
        );

        const data = await response.json();

        if (data.status === 'OK' && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;

          setCenter({ lat, lng });
          return;
        }

        throw new Error('Failed to get coordinates from Plus Code.');
      } catch (error) {
        console.error(error);
        throw error;
      }
    })();
  }, [ActiveSeller, Center]);

  useEffect(() => {
    if (!Destination && !ActiveSeller) {
      return;
    }

    (async () => {
      if (!Destination) {
        return;
      }

      const directionsService = new google.maps.DirectionsService();

      const results = await directionsService.route({
        origin: ActiveSeller.plusCode,
        destination: Destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    })();

    return clearRoute();
  }, [Destination, ActiveSeller]);

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
  };

  return (
    <Box width="400px" mb={theme.space[4]}>
      <Box mb={theme.space[5]}>
        <Info>Distance to the store: {distance} </Info>
        <Info>Estimated delivery time: {duration} </Info>
      </Box>
      <MapBox>
        <GoogleMap
          center={Center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={Center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </MapBox>
    </Box>
  );
}

export default App;
