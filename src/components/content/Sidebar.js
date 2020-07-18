import React from 'react';
import { useSelector } from 'react-redux';

import Menu from './Menu';



export default function Sidebar() {
  

  const global = useSelector((state) => state.global);

  return (
    <div className="Sidebar">
      <Menu globalData={global} />
    </div>
  );
}
