import * as types from './types';
import axios from 'axios';

export const fetchGlobalsRequest = () => {
  return {
    type: types.FETCH_GLOBALS_REQUEST,
  };
};

export const fetchGlobalsSuccess = (data) => {
  return {
    type: types.FETCH_GLOBALS_SUCCESS,
    payload: data,
  };
};

export const fetchGlobalsFail = (error) => {
  return {
    type: types.FETCH_GLOBALS_FAIL,
    payload: error,
  };
};

export const selectCountry = (country) => {
  return {
    type: types.SELECT_COUNTRY,
    payload: country,
  };
};

export const fetchGlobals = () => async (dispatch) => {
  const url = 'https://api.covid19api.com/summary';

  try {
    dispatch(fetchGlobalsRequest());
    const response = await axios.get(url);
    dispatch(fetchGlobalsSuccess(response.data.Global));
  } catch (error) {
    const errMsg = error.message;
    dispatch(fetchGlobalsFail(errMsg));
  }
};
