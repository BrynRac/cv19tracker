import React from 'react';
import { useSelector } from 'react-redux';

import Search from '../search/Search';
import Menu from './Menu';

export default function Sidebar() {
  const global = useSelector((state) => state.global);

  return (
    <div className="Sidebar">
      <Search />
      <Menu globalData={global.globals}/>
    </div>
  );
}
