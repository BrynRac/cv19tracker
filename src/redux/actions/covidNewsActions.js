import * as types from './types';
import axios from 'axios';

export const fetchNewsRequest = () => {
  return { type: types.FETCH_NEWS_REQUEST };
};

export const fetchNewsSuccess = (news) => {
  return {
    type: types.FETCH_NEWS_SUCCESS,
    payload: news,
  };
};

export const fetchNewsFail = (error) => {
  return { type: types.FETCH_NEWS_FAIL, payload: error };
};

export const fetchNews = () => async (dispatch) => {
  const url = 'https://api.smartable.ai/coronavirus/news/US';
  const token = process.env.REACT_APP_NEWS_TOKEN;

  try {
    dispatch(fetchNewsRequest());
    const response = await axios({
      url,
      headers: { 'Cache-Control': 'no-cache', 'Subscription-Key': token },
    });

    const newsData = response.data;
    dispatch(fetchNewsSuccess(newsData));
  } catch (error) {
    const errMsg = error.message;
    dispatch(fetchNewsFail(errMsg));
  }
};
