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
    maxZoom: 12,
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

  const { clusters, supercluster } = useSupercluster({
    points,
    zoom: viewport.zoom,
    bounds,
    options: { radius: 80, maxZoom: viewport.maxZoom },
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

          function zoomIn() {
            const expansionZoom = Math.min(
              supercluster.getClusterExpansionZoom(cluster.id),
              12
            );
            setViewport({
              ...viewport,
              latitude,
              longitude,
              zoom: expansionZoom,
            });
          }

          function activateMarker() {
            setActiveMarker(cluster.properties);
          }

          if (isCluster) {
            return (
              <Marker
                key={cluster.id}
                latitude={latitude}
                longitude={longitude}
              >
                {pointCount < 20 ? (
                  <div
                    onClick={() => zoomIn()}
                    className="cluster-marker"
                    style={{ width: '25px', height: '25px' }}
                  >
                    {pointCount}
                  </div>
                ) : (
                  <div
                    onClick={() => zoomIn()}
                    className="cluster-marker"
                    style={{
                      width: `${7 * (pointCount / points.length) * 50}px`,
                      height: `${7 * (pointCount / points.length) * 50}px`,
                    }}
                  >
                    {pointCount}
                  </div>
                )}
              </Marker>
            );
          }
          return (
            <Marker key={code} latitude={latitude} longitude={longitude}>
              <IntlProvider locale="en">
                {confirmed > 0 && confirmed < 10000 && (
                  <div
                    className="marker marker-small"
                    onClick={() => {
                      activateMarker();
                    }}
                  >
                    <FormattedNumber value={confirmed} />
                  </div>
                )}
                {confirmed > 10000 && confirmed < 30000 && (
                  <div
                    className="marker marker-medium"
                    onClick={() => {
                      activateMarker();
                    }}
                  >
                    <FormattedNumber value={confirmed} />
                  </div>
                )}
                {confirmed > 50000 && (
                  <div
                    className="marker marker-large"
                    onClick={() => {
                      activateMarker();
                    }}
                  >
                    <FormattedNumber value={confirmed} />
                  </div>
                )}
              </IntlProvider>
            </Marker>
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
