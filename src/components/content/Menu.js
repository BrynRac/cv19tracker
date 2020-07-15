import React from 'react';

import Search from '../search/Search';

export default function Menu({ countries }) {
  return (
    <div className="Menu">
      <h1>Countries</h1>
      <Search />
      <ul className="country-list">
        {countries.map((country) => (
          <li key={country.name} className="country-btn">
            <h4>{country.name}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
}
