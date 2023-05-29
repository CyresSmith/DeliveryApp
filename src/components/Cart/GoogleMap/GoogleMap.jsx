import { forwardRef } from 'react';
import { FaLocationArrow, FaTimes } from 'react-icons/fa';

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';

import { useRef, useState } from 'react';

const MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

import Box from 'components/shared/Box';
import Button from 'components/shared/Button';
import IconButton from 'components/Shared/IconButton';
import { useEffect } from 'react';

const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);

// const center = { lat: 48.8584, lng: 2.2945 };

function App({ destiantionRef, ActiveSeller }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: MAPS_API_KEY,
    libraries: ['places'],
  });

  const [Center, setCenter] = useState(null);

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

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  // /** @type React.MutableRefObject<HTMLInputElement> */
  // const originRef = useRef();
  // /** @type React.MutableRefObject<HTMLInputElement> */
  // const destiantionRef = useRef();

  if (!isLoaded) {
    return <p />;
  }

  async function calculateRoute() {
    if (destiantionRef.current.value === '') {
      return;
    }

    const directionsService = new google.maps.DirectionsService();

    const results = await directionsService.route({
      origin: ActiveSeller.plusCode,
      destination: destiantionRef.current.value,
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
  }

  return (
    <Box
      position="relative"
      flexDirection="column"
      alignItems="center"
      style={{
        width: '300px',
        height: '200px',
      }}
    >
      <Box
        style={{
          width: '100%',
          height: '100%',
        }}
      >
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
      </Box>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        minW="container.md"
        zIndex="1"
      >
        <Box justifyContent="space-between">
          {/* <Box flexGrow={1}>
            <Autocomplete>
              <Input type="text" placeholder="Origin" ref={originRef} />
            </Autocomplete>
          </Box> */}
          {/* <Box flexGrow={1}>
            <Autocomplete>
              <Input
                type="text"
                placeholder="Destination"
                ref={destiantionRef}
              />
            </Autocomplete>
          </Box> */}

          <Box>
            <Button colorScheme="pink" type="submit" onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label="center back"
              icon={FaTimes}
              onClick={clearRoute}
            />
          </Box>
        </Box>
        <Box spacing={4} mt={4} justifyContent="space-between">
          <p>Distance: {distance} </p>
          <p>Duration: {duration} </p>
          <IconButton
            aria-label="center back"
            icon={FaLocationArrow}
            isRound
            onClick={() => {
              map.panTo(Center);
              map.setZoom(15);
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
