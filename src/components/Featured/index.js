import React from 'react';
import Carousel from './Carousel';
import CountdownTimer from './CountdownTimer';

const Featured = () => {
  return (
    <div style={ {position: 'relative'} }>
    <Carousel/>
      <div className="artist_name">
        <div className="wrapper">
          Ariana Grande
        </div>
      </div>
      <CountdownTimer/>
    </div>
  );
};

export default Featured;