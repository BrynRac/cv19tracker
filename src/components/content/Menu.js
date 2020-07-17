import React from 'react';
import { IntlProvider, FormattedNumber } from 'react-intl';

export default function Menu({ globalData }) {
  return (
    <div className="Menu">
      <h2>C-19 Tracker</h2>
      <ul className="menu-list">
        <IntlProvider locale="en">
          <li className="menu-item">
            <p>Total Confirmed: </p>
            <div>
              <h3>
                <FormattedNumber value={globalData.TotalConfirmed} />
              </h3>
              <span>
                +<FormattedNumber value={globalData.NewConfirmed} />{' '}
              </span>
            </div>
          </li>
          <li className="menu-item">
            <p>Total Deaths: </p>

            <div>
              <h3>
                <FormattedNumber value={globalData.TotalDeaths} />
              </h3>
              <span>
                +<FormattedNumber value={globalData.NewDeaths} />
              </span>
            </div>
          </li>
          <li className="menu-item">
            <p>Total Recovered: </p>
            <div>
              <h3>
                <FormattedNumber value={globalData.TotalRecovered} />
              </h3>
              <span>
                +<FormattedNumber value={globalData.NewRecovered} />
              </span>
            </div>
          </li>
        </IntlProvider>
      </ul>
    </div>
  );
}
