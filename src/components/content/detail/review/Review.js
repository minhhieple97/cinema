import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import './Review.scss';
import { useSelector } from 'react-redux';
const Review = () => {
    const { movie } = useSelector(state => state.movies);
    const [reviews] = useState(movie[4]);
    return (
        <>
            <div className="movie-reviews">
                <div className="div-title">Reviews {reviews.results.length > 0 ? reviews.results.length : ''}</div>
                {reviews.results.length ? (
                    reviews.results.map((data) => (
                        <div className="reviews" key={uuidv4()}>
                            <h3>{data.author}</h3>
                            <div>{data.content}</div>
                        </div>
                    ))
                ) : (
                        <p>No reviews to show</p>
                    )}
            </div>
        </>
    );
};
Review.propTypes = {
    movie: PropTypes.array
};
export default Review;