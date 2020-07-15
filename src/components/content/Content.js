import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/actions/restCountriesActions.js.js';

//components
import Map from './Map';
import Sidebar from './Sidebar';

export default function Content() {
  const data = useSelector((state) => state.countryData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.countries.length) {
      dispatch(fetchCountries());
    }
  }, [dispatch, data.countries.length]);

  // <button onClick={() => dispatch(fetchCountries())}>Fetch Countries</button>;
  return (
    <div className="Content">
      <Sidebar countries={data.countries} />
      <div className="map-container">
        <Map />
      </div>
    </div>
  );
}
