import { IMAGE_URL } from '../../../services/movie';
import Rating from '../rating/Rating';
import './Grid.scss';
const Grid = ({ images }) => {
  return (
    <>
      <div className="grid">
        {images.map((image, i) => {
          return (
            <div key={image.id}>
              <div
                className="grid-cell"
                style={{ backgroundImage: `url(${IMAGE_URL}/${image.poster_path})` }}
              >
                <div className="grid-read-more">
                  <button className="grid-cell-button">Read More</button>
                </div>
                <div className="grid-detail">
                  <span className="grid-detail-title">{image.title}</span>
                  <div className="grid-detail-rating">
                    <Rating rating={image.vote_average} totalStars={10}></Rating>
                    &nbsp;&nbsp;
                    <div className="grid-vote-average">{image.vote_average}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Grid;
