import React from 'react';
import { IntlProvider, FormattedNumber } from 'react-intl';

export default function PopUp({ country }) {
  return (
    <div className="PopUp">
      <ul className="popup-list">
        <li className="popup-item">
          <h3>{country.location}</h3>
        </li>
        <IntlProvider locale="en">
          <li className="popup-item">
            <p>Confirmed:</p>
            <h4>
              <FormattedNumber value={country.confirmed} />
            </h4>
          </li>
          <li className="popup-item">
            <p>Deaths:</p>
            <h4 style={{ color: ' #ff3535' }}>
              <FormattedNumber value={country.dead} />
            </h4>
          </li>
          <li className="popup-item">
            <p>Recovered</p>
            <h4 style={{ color: '#178717' }}>
              <FormattedNumber value={country.recovered} />
            </h4>
          </li>
        </IntlProvider>
      </ul>
    </div>
  );
}
