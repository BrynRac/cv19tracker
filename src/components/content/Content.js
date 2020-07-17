import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCovid } from '../../redux/actions/covidActions';
import { fetchGlobals } from '../../redux/actions/globalCovidActions';

//components
import Map from './Map';
import Sidebar from './Sidebar';

export default function Content() {
  const covid = useSelector((state) => state.covid);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCovid()).catch((error) =>
      console.log('Error in useEffect: ', error.message)
    );
    dispatch(fetchGlobals()).catch((error) =>
      console.log('Error in useEffect: ', error.message)
    );
  }, [dispatch]);

  return (
    <div className="Content">
      <Sidebar />
      <div className="map-container">
        <Map covid={covid} />
      </div>
    </div>
  );
}
