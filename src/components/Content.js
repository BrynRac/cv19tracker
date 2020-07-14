import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCountries,
  fetchCountriesFail,
  fetchCountriesSuccess,
} from '../redux/actions/restCountriesActions.js';

export default function Content() {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Content</h1>
      <button onClick={() => dispatch(fetchCountries())}>
        Fetch Countries
      </button>
      <button onClick={() => dispatch(fetchCountriesFail())}>
        {' '}
        Countries Fail
      </button>
      <button onClick={() => dispatch(fetchCountriesSuccess())}>
        {' '}
        Countries Success
      </button>
    </div>
  );
}
