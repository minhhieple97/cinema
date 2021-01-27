import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { pathURL } from '../../../redux/actions';
import { movieDetails } from '../../../redux/actions/movies';
import { IMAGE_URL } from '../../../services/movie';
import Spinner from '../../spinner/Spinner';
import Rating from '../rating/Rating';
import Crew from './crew/Crew';
import './Detail.scss';
import Media from './media/Media';
import Overview from './overview/Overview';
import Review from './review/Review';
import Tabs from './tabs/Tabs';
const Detail = ({ match }) => {
  const dispatch = useDispatch();
  const { movie, loading } = useSelector((state) => state.movies);
  const { id } = useParams();
  useEffect(() => {
    dispatch(pathURL(match.path, match.url));
    dispatch(movieDetails(id));
    // eslint-disable-next-line
  }, [dispatch, id]);
  return (
    <> {loading ? <Spinner></Spinner> : <>
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
                    <div label="Crew">
                      <Crew></Crew>
                    </div>
                    <div label="Media">{<Media />}</div>
                    <div label="Reviews">{<Review />}</div>
                  </Tabs>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>}
    </>
  );
};
export default Detail;
