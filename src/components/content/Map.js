import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovid } from '../../redux/actions/covidActions';

import Spinner from '../Spinner';

export default function Map() {
  const data = useSelector((state) => state.covidData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data.covidData.length === 0) {
      dispatch(fetchCovid());
    }
  }, []);

  const [viewport, setViewport] = useState({
    lat: 39.8283,
    lng: 98.5795,
    zoom: 2,
    width: '100vw',
    height: '100vh',
  });
  const token =
    'pk.eyJ1IjoiZ2FpemEiLCJhIjoiY2tjbnRibjh6MGVqcDJ5b2Fqa3RlcjF0dCJ9._4VCTwYCfUIhO-YB6kloVw';
  return (
    <div>
      {data.loading && <Spinner />}
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={token}
        mapStyle="mapbox://styles/gaiza/ckco24rjf35zq1irwzq6dl5td"
        onViewportChange={(viewport) => setViewport(viewport)}
      ></ReactMapGL>
    </div>
  );
}
