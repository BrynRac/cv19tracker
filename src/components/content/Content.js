import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovid } from '../../redux/actions/covidActions';
import { fetchGlobals } from '../../redux/actions/globalCovidActions';
import { fetchNews } from '../../redux/actions/covidNewsActions';

//components
import Map from './map/Map';
import Sidebar from './sidebar/Sidebar';
import Spinner from '../Spinner';
import Title from '../Title';
import Modal from './Modal';

export default function Content() {
  const covid = useSelector((state) => state.covid);
  const news = useSelector((state) => state.news);
  const global = useSelector((state) => state.global);
  const modal = useSelector((state) => state.modal);

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
      {modal.modalOpen && <Modal story={modal.modalContent}/>}
      {/* <Carousel /> */}
      <Title />
    </div>
  );
}
