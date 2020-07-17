import React from 'react';

export default function Popup({ country }) {
  return (
    <div className="Popup">
      <ul className="menu-list">
        <li className="menu-item">
          <h4>{country.location}</h4>
        </li>
        <li className="menu-item">
          <p>Confirmed:</p>
          <h4> {country.confirmed}</h4>
        </li>
        <li className="menu-item">
          <p>Deaths:</p>
          <h4> {country.dead}</h4>
        </li>
        <li className="menu-item">
          <p>Recovered</p>
          <h4> {country.recovered}</h4>
        </li>
        <li className="menu-item">
          <p>Updated: {country.updated}</p>
        </li>
      </ul>
    </div>
  );
}
