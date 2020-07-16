import React from 'react';
import { useDispatch } from 'react-redux';

import Search from '../search/Search';
import { selectCountry } from '../../redux/actions/restCountriesActions.js';

export default function Menu({ countries }) {
  const dispatch = useDispatch();

  return (
    <div className="Menu">
      <h1>Countries</h1>
      <Search />
      <ul className="country-list">
        {countries.map((country) => (
          <li
            key={country.name}
            onClick={() => dispatch(selectCountry(country))}
            className="country-btn"
          >
            <h4>{country.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
