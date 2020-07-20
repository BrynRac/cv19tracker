import React from 'react';

import Menu from './Menu';
import News from '../News';

export default function Sidebar({ news, global }) {
  return (
    <div className="Sidebar">
      <Menu globalData={global} />
      {news.loading ? (
        <div className="news-container">Fetching news...</div>
      ) : (
        <News news={news} />
      )}
    </div>
  );
}
