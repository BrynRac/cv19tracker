import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovid } from '../../redux/actions/covidActions';
import { fetchGlobals } from '../../redux/actions/globalCovidActions';
import { fetchNews } from '../../redux/actions/covidNewsActions';

//components
import Map from './Map';
import Sidebar from './Sidebar';
import Spinner from '../Spinner';

export default function Content() {
  const covid = useSelector((state) => state.covid);
  const news = useSelector((state) => state.news);
  const global = useSelector((state) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovid()).catch((error) =>
      console.log('Error in useEffect: ', error.message)
    );
    dispatch(fetchGlobals()).catch((error) =>
      console.log('Error in useEffect: ', error.message)
    );
    dispatch(fetchNews()).catch((error) =>
      console.log('Error in useEffect: ', error.message)
    );
  }, [dispatch]);

  return (
    <div className="Content">
      {news.loading || global.loading ? (
        <p>Fetching data...</p>
      ) : (
        <Sidebar news={news} global={global} />
      )}

      <div className="map-container">
        {covid.loading ? <Spinner /> : <Map covid={covid} />}
      </div>
    </div>
  );
}
