import React, { useState, useEffect, useRef } from 'react';
import ReactMapGL, { Marker, Popup, Cluster } from 'react-map-gl';
import useSupercluster from 'use-supercluster';

import PopUp from './PopUp';

// function debounce(fn, ms) {
//   let timer;
//   return (_) => {
//     clearTimeout(timer);
//     timer = setTimeout((_) => {
//       timer = null;
//       fn.apply(this, arguments);
//     }, ms);
//   };
// }

export default function Map({ covid }) {
  // const [dimensions, setDimensions] = useState({
  //   width: '100vw',
  //   height: '100vh',
  // });

  const [viewport, setViewport] = useState({
    lat: 39.8283,
    lng: 60,
    zoom: 1,
    maxZoom: 6,
  });
  const [activeMarker, setActiveMarker] = useState(null);

  useEffect(() => {
    // const debouncedHandleResize = debounce(function handleResize() {
    //   setViewport(
    //     { ...viewport },
    //     { width: dimensions.width, height: dimensions.height }
    //   );
    // }, 1000);

    const listener = (e) => {
      if (e.key === 'Escape') {
        setActiveMarker(null);
      }
    };
    // window.addEventListener('resize', debouncedHandleResize);
    window.addEventListener('keydown', listener);
    return (_) => {
      window.removeEventListener('keydown', listener);
      // window.removeEventListener('resize', debouncedHandleResize);
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
            <Marker key={code} latitude={latitude} longitude={longitude}>
              {confirmed === 0 && <div className="marker"></div>}
              {confirmed > 0 && confirmed < 10000 && (
                <div className="marker marker-small"></div>
              )}
              {confirmed > 10000 && confirmed < 30000 && (
                <div className="marker marker-medium"></div>
              )}
              {confirmed > 50000 && (
                <div
                  className="marker marker-large"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveMarker(cluster.properties);
                  }}
                >
                  {confirmed.toString().length > 3 ? confirmed.toString().slice(0, 3) +'K' : confirmed}
                </div>
              )}
            </Marker>
          );
        })}
        {/* {covid.covidData.map((country) => (
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
        ))} */}
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
