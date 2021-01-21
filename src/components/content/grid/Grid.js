import { IMAGE_URL } from '../../../services/movie';
import LazyImage from '../../lazy-image/LazyImage';
import Rating from '../rating/Rating';
import './Grid.scss';
const Grid = ({ images }) => {
  return (
    <>
      <div className="grid">
        {images.map((image, i) => {
          return (
            <div key={image.id}>
              
              <LazyImage
                className="grid-cell"
                src={`url(${IMAGE_URL}/${image.poster_path})`}
                alt="placeholder"
              >
                <div className="grid-read-more">
                  <button className="grid-cell-button">Read More</button>
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
