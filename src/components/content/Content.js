import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovid } from '../../redux/actions/covidActions';
import { fetchGlobals } from '../../redux/actions/globalCovidActions';
import { fetchNews } from '../../redux/actions/covidNewsActions';

//components
import Map from './Map';
import Sidebar from './Sidebar';
import Spinner from '../Spinner';
import News from '../News';

export default function Content() {
  const covid = useSelector((state) => state.covid);
  const news = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchCovid()).catch((error) =>
    //   console.log('Error in useEffect: ', error.message)
    // );
    // dispatch(fetchGlobals()).catch((error) =>
    //   console.log('Error in useEffect: ', error.message)
    // );
    dispatch(fetchNews()).catch((error) =>
      console.log('Error in useEffect: ', error.message)
    );
  }, [dispatch]);

  return (
    <div className="Content">
      <Sidebar />
      <div className="map-container">
        {covid.loading ? <Spinner /> : <Map covid={covid} />}
      </div>
      {news.loading ? (
        <div className="news-container">Fetching news...</div>
      ) : (
        <News />
      )}
    </div>
  );
}
