import React from 'react';
import Slider from "react-slick";

import slide_one from '../../resources/images/slide_one.jpg';
import slide_two from '../../resources/images/slide_two.jpg';
import slide_three from '../../resources/images/slide_three.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true
  }
  return (
    <div 
      className="carousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        overflow: 'hidden'
      }}>
      <Slider {...settings}>
        <div>
          <div className="carousel_image"
           style={{
            height: `${window.innerHeight}px`,
             background: `url(${slide_one})`
           }}
          >
          </div>
        </div>
        <div>
          <div className="carousel_image"
          style={{
          height: `${window.innerHeight}px`,
            background: `url(${slide_two})`
          }}
          >
        </div>
        </div>
        <div>
          <div className="carousel_image"
          style={{
          height: `${window.innerHeight}px`,
            background: `url(${slide_three})`
          }}
          >
        </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;