import React from 'react';

export default function Menu({ globalData }) {
  return (
    <div className="Menu">
      <h2>C-19 Tracker</h2>
      <ul className="menu-list">
        <li className="menu-item">
          <p>Total Confirmed: </p>
          <div>
            <h3>{globalData.TotalConfirmed}</h3>
            <span>+{globalData.NewConfirmed}</span>
          </div>
        </li>
        <li className="menu-item">
          <p>Total Deaths: </p>

          <div>
            <h3>{globalData.TotalDeaths}</h3>
            <span>+{globalData.NewDeaths}</span>
          </div>
        </li>
        <li className="menu-item">
          <p>Total Recovered: </p>
          <div>
            <h3>{globalData.TotalRecovered}</h3>
            <span>+{globalData.NewRecovered}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
