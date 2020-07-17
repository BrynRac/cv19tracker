import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Search from '../search/Search';
import Menu from './Menu';

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default function Sidebar() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth);
    }, 300);

    window.addEventListener('resize', debouncedHandleResize);

    return (_) => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  });

  const global = useSelector((state) => state.global);

  return (
    <div className={`Sidebar ${width <= 800 ? 'hidden' : ''}`}>
      <Search />
      <Menu globalData={global} />
    </div>
  );
}
