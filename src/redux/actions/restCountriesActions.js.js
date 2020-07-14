import * as types from './types';

export const fetchCountries = () => {
  return {
    type: types.FETCH_COUNTRIES,
  };
};

export const fetchCountriesSuccess = (countries) => {
  return {
    type: types.FETCH_COUNTRIES_SUCCESS,
    payload: countries,
  };
};

export const fetchCountriesFail = (error) => {
  return {
    type: types.FETCH_COUNTRIES_FAIL,
    payload: error,
  };
};
