import React from 'react';
import './SlideShow.scss';
const SlideShow = () => {
  return (
    <>
      <div className="slider">
        <div className="slider-slides">
          <div
            className="slider-image"
            style={{
              backgroundImage:
                'url(https://seido.vn/wp-content/uploads/2020/12/Colorful-Geometric-Simple-Background-Image.jpg)'
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default SlideShow;
