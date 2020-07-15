import React from 'react';
import world from '@svg-maps/world';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';
export default function Map() {
  return (
    <div>
      <SVGMap map={world} />
    </div>
  );
}
