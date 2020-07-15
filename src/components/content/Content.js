import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/actions/restCountriesActions.js.js';

//components
import Map from './Map';
import Sidebar from './Sidebar';

export default function Content() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  // <button onClick={() => dispatch(fetchCountries())}>Fetch Countries</button>;
  return (
    <div className="Content">
      <Sidebar />
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}
