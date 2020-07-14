import axios from 'axios';
import * as types from '../actions/types';

const initialState = {
  loading: false,
  data: [],
};

const url = `https://restcountries.eu/rest/v2/all`;
const getAll = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Error in getAll ', error);
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_COUNTRIES:
      return (state = types.FETCH_COUNTRIES);

    case types.FETCH_COUNTRIES_SUCCESS:
      return (state = getAll());

    case types.FETCH_COUNTRIES_FAIL:
      return (state = types.FETCH_COUNTRIES_FAIL);

    default:
      return state;
  }
}
