import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { IntlProvider, FormattedNumber } from 'react-intl';
import useSupercluster from 'use-supercluster';

import PopUp from './PopUp';

export default function Map({ covid }) {
  const [viewport, setViewport] = useState({
    lat: 39.8283,
    lng: 60,
    zoom: 1,
    maxZoom: 6,
  });
  const [activeMarker, setActiveMarker] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === 'Escape') {
        setActiveMarker(null);
      }
    };
    window.addEventListener('keydown', listener);
    return (_) => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  const token = process.env.REACT_APP_MAPBOX_TOKEN;

  const mapRef = useRef();

  const points = covid.covidData.map((point) => ({
    type: 'Feature',
    properties: {
      cluster: false,
      location: point.location,
      confirmed: point.confirmed,
      recovered: point.recovered,
      dead: point.dead,
      updated: point.updated,
      code: point.country_code,
      lat: point.latitude,
      lng: point.longitude,
    },
    geometry: { type: 'Point', coordinates: [point.longitude, point.latitude] },
  }));

  const bounds = mapRef.current
    ? mapRef.current.getMap().getBounds().toArray().flat()
    : null;

  const { clusters } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds,
    options: { radius: 65, maxZoom: viewport.maxZoom },
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/gaiza/ckco24rjf35zq1irwzq6dl5td"
        onViewportChange={(viewport) => setViewport(viewport)}
        width={'100vw'}
        height={'100vh'}
        ref={mapRef}
      >
        {clusters.map((cluster) => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount,
          } = cluster.properties;
          const { confirmed, code } = cluster.properties;
          if (isCluster) {
            return (
              <Marker
                key={cluster.id}
                latitude={latitude}
                longitude={longitude}
              >
                <div className="cluster-marker">{pointCount}</div>
              </Marker>
            );
          }
          return (
            <IntlProvider locale="en">
              <Marker key={code} latitude={latitude} longitude={longitude}>
                {confirmed > 0 && confirmed < 10000 && (
                  <div
                    className="marker marker-small"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveMarker(cluster.properties);
                    }}
                  >
                    <FormattedNumber value={confirmed} />
                  </div>
                )}
                {confirmed > 10000 && confirmed < 30000 && (
                  <div
                    className="marker marker-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveMarker(cluster.properties);
                    }}
                  >
                    <FormattedNumber value={confirmed} />
                  </div>
                )}
                {confirmed > 50000 && (
                  <div
                    className="marker marker-large"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveMarker(cluster.properties);
                    }}
                  >
                    <FormattedNumber value={confirmed} />
                  </div>
                )}
              </Marker>
            </IntlProvider>
          );
        })}

        {activeMarker ? (
          <Popup
            onClose={() => setActiveMarker(null)}
            latitude={activeMarker.lat}
            longitude={activeMarker.lng}
          >
            <PopUp country={activeMarker} />
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}
