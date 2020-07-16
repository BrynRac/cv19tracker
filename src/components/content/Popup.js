import React from 'react';
import { useSelector } from 'react-redux';

export default function Popup() {
  const country = useSelector((state) => state.country);

  const countryInfo = (
    <div className="Popup">
      <h4>{country.name}</h4>
      <img src={country.flag} />
      <p>Region: {country.region}</p>
    </div>
  );
  const noInfo = <div></div>;
  {
    country ? countryInfo : noInfo;
  }
}
