import * as types from './types';
import axios from 'axios';

export const fetchCountriesRequest = () => {
  return {
    type: types.FETCH_COUNTRIES_REQUEST,
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

export const fetchCountries = () => {
  const url = `https://restcountries.eu/rest/v2/all`;

  return async (dispatch) => {
    try {
      dispatch(fetchCountriesRequest());
      const response = await axios.get(url);
      const countries = response.data;
      dispatch(fetchCountriesSuccess(countries));
    } catch (error) {
      const errMsg = error.message;
      dispatch(fetchCountriesFail(errMsg));
    }
  };
};
