import React from 'react';
import { IntlProvider, FormattedNumber } from 'react-intl';

export default function PopUp({ country }) {
  return (
    <div className="PopUp">
      <ul className="menu-list">
        <li className="menu-item">
          <h4>{country.location}</h4>
        </li>
        <IntlProvider>
          <li className="menu-item popup-item">
            <p>Confirmed:</p>
            <h4>
              <FormattedNumber value={country.confirmed} />
            </h4>
          </li>
          <li className="menu-item popup-item">
            <p>Deaths:</p>
            <h4>
              <FormattedNumber value={country.dead} />
            </h4>
          </li>
          <li className="menu-item popup-item">
            <p>Recovered</p>
            <h4>
              <FormattedNumber value={country.recovered} />
            </h4>
          </li>
          <li className="menu-item">
            <p>Updated: {country.updated}</p>
          </li>
        </IntlProvider>
      </ul>
    </div>
  );
}
