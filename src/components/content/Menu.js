import React from 'react';
import { IntlProvider, FormattedNumber } from 'react-intl';
import Countup from 'react-countup';

export default function Menu({ globalData }) {
  const countupParams = {
    duration: 1,
    start: 0,
    separator: ',',
  };

  let renderItems;

  if (globalData.loading) {
    renderItems = <div className="Menu">Loading...</div>;
  } else {
    renderItems = (
      <div className="Menu">
        <h2>CV-19 Tracker</h2>
        <ul className="menu-list">
          <IntlProvider locale="en">
            <li className="menu-item">
              <p>Total Confirmed: </p>
              <div>
                <h3>
                  <FormattedNumber value={globalData.globals.TotalConfirmed} />
                </h3>
                {/* <Countup {...countupParams} end={globalData.globals ? globalData.globals.TotalConfirmed : [] }/> */}
                <span>
                  +<FormattedNumber value={globalData.globals.NewConfirmed} />{' '}
                </span>
              </div>
            </li>
            <li className="menu-item">
              <p>Total Deaths: </p>

              <div>
                <h3>
                  <FormattedNumber value={globalData.globals.TotalDeaths} />
                </h3>
                <span>
                  +<FormattedNumber value={globalData.globals.NewDeaths} />
                </span>
              </div>
            </li>
            <li className="menu-item">
              <p>Total Recovered: </p>
              <div>
                <h3>
                  <FormattedNumber value={globalData.globals.TotalRecovered} />
                </h3>
                <span>
                  +<FormattedNumber value={globalData.globals.NewRecovered} />
                </span>
              </div>
            </li>
          </IntlProvider>
        </ul>
      </div>
    );
  }
  return renderItems;
}
