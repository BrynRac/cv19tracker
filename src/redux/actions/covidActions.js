import * as types from './types';
import axios from 'axios';

export const fetchCovidRequest = () => {
  return { type: types.FETCH_COVID_REQUEST };
};

export const fetchCovidSuccess = (covidCountries) => {
  return {
    type: types.FETCH_COVID_SUCCESS,
    payload: covidCountries,
  };
};

export const fetchCovidFail = (error) => {
  return { type: types.FETCH_COVID_FAIL, payload: error };
};

export const fetchCovid = () => async (dispatch) => {
  const url = 'https://www.trackcorona.live/api/countries';

  try {
    dispatch(fetchCovidRequest());
    const response = await axios.get(url);
    const covidData = response.data.data;
    dispatch(fetchCovidSuccess(covidData));
  } catch (error) {
    const errMsg = error.message;
    dispatch(fetchCovidFail(errMsg));
  }
};
