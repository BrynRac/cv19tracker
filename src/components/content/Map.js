import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

import Spinner from '../Spinner';
import PopUp from './PopUp';

export default function Map({ covid }) {
  const [viewport, setViewport] = useState({
    lat: 39.8283,
    lng: 98.5795,
    zoom: 2,
    width: '100vw',
    height: '100vh',
  });
  const [activeMarker, setActiveMarker] = useState(null);

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
