import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Rating.scss';
const Rating = ({ rating, totalStars, className }) => {
  const [numberOfStars, setNumberOfStars] = useState(0);
  const ratingRef = useRef()
  useEffect(() => {
    const stars = [...Array(totalStars).keys()].map(el => el + 1);
    setNumberOfStars(stars);
    const percentStar = `${Math.floor((rating * 100) / totalStars)}%`;
    ratingRef.current.style.width = percentStar
  }, [totalStars, rating])
  return (
    <div className="star-rating">
      <div className={`back-stars ${className}`}>
        {numberOfStars && numberOfStars.map((el) => {
          return <i key={el} className="fa fa-star" aria-hidden="true"></i>
        })}
        <div className={`front-stars ${className}`} ref={ratingRef} >
          {numberOfStars && numberOfStars.map((el) => {
            return <i key={el} className="fa fa-star" aria-hidden="true"></i>
          })}
        </div>
      </div>
    </div>
  );
};
Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
  className: PropTypes.string
};

export default Rating;
