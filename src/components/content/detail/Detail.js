import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { movieDetails } from '../../../redux/actions/movies';
import { IMAGE_URL } from '../../../services/movie';
import Rating from '../rating/Rating';
import './Detail.scss';
import Overview from './overview/Overview';
import Tabs from './tabs/Tabs';
const Detail = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => state.movies);
  const { id } = useParams();
  useEffect(() => {
    dispatch(movieDetails(id));
  }, [dispatch, id]);
  return (
    <>
      <div className="movie-container">
        {movie[0] && (
          <>
            <div
              className="movie-bg"
              style={{
                backgroundImage: `url(${IMAGE_URL}${movie[0].backdrop_path})`
              }}
            ></div>
            <div className="movie-overlay"></div>
            <div className="movie-details">
              <div className="movie-image">
                <img src={`${IMAGE_URL}${movie[0].poster_path}`} alt="" />
              </div>
              <div className="movie-body">
                <div className="movie-overview">
                  <div className="title">
                    {movie[0].title} <span>{movie[0].release_date}</span>
                  </div>
                  <div className="movie-genres">
                    <ul className="genres">
                      {movie[0].genres.map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rating">
                    <Rating
                      className="rating-stars"
                      rating={movie[0].vote_average}
                      totalStars={10}
                    />
                    &nbsp;
                    <span>{movie[0].vote_average}</span>{' '}
                    <p>({movie[0].vote_count}) reviews</p>
                  </div>
                  <Tabs>
                    <div label="Overview">
                      <Overview />
                    </div>
                    <div label="Crew">{/* <Crew /> */}</div>
                    <div label="Media">{/* <Media /> */}</div>
                    <div label="Reviews">{/* <Reviews /> */}</div>
                  </Tabs>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Detail;
