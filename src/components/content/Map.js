import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import Spinner from '../Spinner';
import PopUp from './PopUp';

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default function Map({ covid }) {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [viewport, setViewport] = useState({
    lat: 39.8283,
    lng: 98.5795,
    zoom: 2,
    width: '100vw',
    height: '100vh',
  });
  const [activeMarker, setActiveMarker] = useState(null);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setViewport({ ...viewport }, { width: '100vw', height: '100vh' });
    }, 1000);

    const listener = (e) => {
      if (e.key === 'Escape') {
        setActiveMarker(null);
      }
    };
    window.addEventListener('resize', debouncedHandleResize);
    window.addEventListener('keydown', listener);
    return (_) => {
      window.removeEventListener('keydown', listener);
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  const token =
    'pk.eyJ1IjoiZ2FpemEiLCJhIjoiY2tjbnRibjh6MGVqcDJ5b2Fqa3RlcjF0dCJ9._4VCTwYCfUIhO-YB6kloVw';

  let renderItems;
  if (!covid.loading) {
    renderItems = (
      <div>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={token}
          mapStyle="mapbox://styles/gaiza/ckco24rjf35zq1irwzq6dl5td"
          onViewportChange={(viewport) => setViewport(viewport)}
        >
          {covid.covidData.map((country) => (
            <Marker
              key={country.country_code}
              latitude={country.latitude}
              longitude={country.longitude}
            >
              {country.confirmed === 0 && <div className="marker"></div>}
              {country.confirmed > 0 && country.confirmed < 10000 && (
                <div className="marker marker-small"></div>
              )}
              {country.confirmed > 10000 && country.confirmed < 30000 && (
                <div className="marker marker-medium"></div>
              )}
              {country.confirmed > 30000 && (
                <div
                  className="marker marker-large"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMarker(country);
                  }}
                ></div>
              )}
            </Marker>
          ))}
          {activeMarker ? (
            <Popup
              onClose={() => setActiveMarker(null)}
              latitude={activeMarker.latitude}
              longitude={activeMarker.longitude}
            >
              <PopUp country={activeMarker} />
            </Popup>
          ) : null}
        </ReactMapGL>
      </div>
    );
  } else {
    renderItems = (
      <div>
        <Spinner />
      </div>
    );
  }
  return renderItems;
}
