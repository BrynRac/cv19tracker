import React, { useState, useEffect } from 'react';

import NewsItem from './NewsItem';

export default function News({ news }) {
  const [newsArr, setNewsArr] = useState([]);

  useEffect(() => {
    setNewsArr(news.news.news);
  }, [news.news.news]);

  return (
    <div className="News">
      {newsArr.length === 0 && <p>Fetching news...</p>}
      <ul className="news-list">
        {newsArr.map((story) => (
          <NewsItem key={story.title} story={story} />
        ))}
      </ul>
    </div>
  );
}
