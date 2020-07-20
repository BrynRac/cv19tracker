import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  toggleModal,
  updateModalContent,
} from '../../../redux/actions/modalActions';

import NewsItem from './NewsItem';

export default function News({ news }) {
  const [newsArr, setNewsArr] = useState([]);
  const modal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    setNewsArr(news.news.news);
  }, [news.news.news]);

  function clickHandler(event) {
    if (!modal.modalOpen) {
      dispatch(toggleModal());
    }

    dispatch(updateModalContent(event));
  }

  return (
    <div className="News">
      {newsArr.length === 0 && <p>Fetching news...</p>}
      <ul className="news-list">
        {newsArr.map((story) => (
          <NewsItem
            key={story.title}
            story={story}
            clickHandler={clickHandler}
          />
        ))}
      </ul>
    </div>
  );
}
