import React, { useState, useEffect } from 'react';
import { IntlProvider, FormattedNumber } from 'react-intl';
import Countup from 'react-countup';

export default function Menu({ globalData }) {
  const [globalNums, setGlobalNums] = useState([]);

  useEffect(() => {
    setGlobalNums(globalData.globals);
  }, [globalData.globals]);

  const countupParams = {
    duration: 1.5,
    start: 0,
    separator: ',',
  };

  let renderItems;

  if (globalNums.length === 0) {
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
                  <Countup {...countupParams} end={globalNums.TotalConfirmed} />
                  {/* <FormattedNumber value={globalNums.TotalConfirmed} /> */}
                </h3>
                {/* <Countup {...countupParams} end={globalData.globals ? globalNums.TotalConfirmed : [] }/> */}
                <span className="small-text">
                  +<FormattedNumber value={globalNums.NewConfirmed} />{' '}
                </span>
              </div>
            </li>
            <li className="menu-item">
              <p>Total Deaths: </p>

              <div>
                <h3 style={{ color: '#da0000' }}>
                  <Countup {...countupParams} end={globalNums.TotalDeaths} />
                  {/* <FormattedNumber value={globalNums.TotalDeaths} /> */}
                </h3>
                <span className="small-text">
                  +<FormattedNumber value={globalNums.NewDeaths} />
                </span>
              </div>
            </li>
            <li className="menu-item">
              <p>Total Recovered: </p>
              <div>
              <h3 style={{ color: 'green' }}>
                  <Countup {...countupParams} end={globalNums.TotalRecovered} />
                  {/* <FormattedNumber value={globalNums.TotalRecovered} /> */}
                </h3>
                <span className="small-text">
                  +<FormattedNumber value={globalNums.NewRecovered} />
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
