import React from 'react';

import Menu from './Menu';
import News from '../News';

export default function Sidebar({ news, global }) {
  return (
    <div className="Sidebar">
      <Menu globalData={global} />
      <News news={news} />
    </div>
  );
}
