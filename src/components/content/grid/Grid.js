import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../../services/movie';
import { formatMovieTitle } from '../../../util';
import LazyImage from '../../lazy-image/LazyImage';
import Rating from '../rating/Rating';
import { v4 as uuidv4 } from 'uuid';
import './Grid.scss';
const Grid = ({ images }) => {
  return (
    <>
      <div className="grid">
        {images &&
          images.map((image, i) => {
            return (
              <div key={uuidv4()}>
                <LazyImage
                  className="grid-cell"
                  src={`${IMAGE_URL}${image.poster_path}`}
                  alt="placeholder"
                >
                  <div className="grid-read-more">
                    <button className="grid-cell-button">
                      <Link
                        to={`/${image.id}/${formatMovieTitle(
                          image.title
                        )}/details`}
                      >
                        Read more
                      </Link>
                    </button>
                  </div>
                  <div className="grid-detail">
                    <span className="grid-detail-title">{image.title}</span>
                    <div className="grid-detail-rating">
                      <Rating
                        rating={image.vote_average}
                        totalStars={10}
                      ></Rating>
                      &nbsp;&nbsp;
                      <div className="grid-vote-average">
                        {image.vote_average}
                      </div>
                    </div>
                  </div>
                </LazyImage>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Grid;
