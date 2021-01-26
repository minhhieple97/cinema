import React, { useEffect, useState } from 'react';
import './SlideShow.scss';
import PropTypes from 'prop-types';
const SlideShow = ({ images, auto, showArrows }) => {
  const [state, setState] = useState({
    slideShow: images[0],
    slideIndex: 0
  });
  const { slideShow } = state;
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      slideShow: images[0],
      slideIndex: 0
    }));
    if (auto) {
      let currentSlideIndex = 0;
      const autoMoveSlide = () => {
        let lastIndex = currentSlideIndex + 1;
        currentSlideIndex = lastIndex >= images.length ? 0 : lastIndex;
        setState((prevState) => ({
          ...prevState,
          slideShow: images[currentSlideIndex],
          slideIndex: currentSlideIndex
        }));
      };
      const interval = setInterval(() => {
        autoMoveSlide();
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [images, auto]);

  const RenderArrows = () => {
    return (
      <div className="slider-arrows">
        <div
          className="slider-arrow slider-arrow--left"
          onClick={() => moveSlideWithArrows('prev')}
        />
        <div
          className="slider-arrow slider-arrow--right"
          onClick={() => moveSlideWithArrows('next')}
        />
      </div>
    );
  };
  const moveSlideWithArrows = (type) => {
    let index = currentIndex;
    switch (type) {
      case 'prev':
        if (currentIndex <= 0) {
          index = images.length - 1;
        } else index -= 1;
        break;
      case 'next':
        if (currentIndex >= images.length - 1) {
          index = 0;
        } else index += 1;
        break;
      default:
        break;
    }
    setCurrentIndex(index);
    setState((prevState) => ({
      ...prevState,
      slideShow: images[index],
      slideIndex: index
    }));
  };
  const Indicators = (props) => {
    const { currentSlide } = props;
    const listIndicators = images.map((slide, i) => {
      const btnClasses =
        i === currentSlide
          ? 'slider-navButton slider-navButton--active'
          : 'slider-navButton';
      return <button className={btnClasses} key={i} />;
    });
    return <div className="slider-nav">{listIndicators}</div>;
  };
  return (
    <>
      <div className="slider">
        <div className="slider-slides">
          {images && images.length && slideShow && (
            <div
              className="slider-image"
              style={{
                backgroundImage: `url(${slideShow.url})`
              }}
            ></div>
          )}
        </div>
        <Indicators currentSlide={1}></Indicators>
        {showArrows ? <RenderArrows></RenderArrows> : null}
      </div>
    </>
  );
};
SlideShow.propTypes = {
  images: PropTypes.array.isRequired,
  auto: PropTypes.bool.isRequired,
  showArrows: PropTypes.bool.isRequired,
  currentSlide: PropTypes.number
};
export default SlideShow;
