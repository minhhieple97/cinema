import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getMovies,
  setResponsePageNumber
} from '../../../redux/actions/movies';
import { IMAGE_URL } from '../../../services/movie';
import { MOVIE_TYPE_HASH } from '../../../util/constants';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import SlideShow from '../slide-show/SlideShow';
import './MainContent.scss';
const MainContent = () => {
  const { list, totalPages, movieType, page } = useSelector(
    (state) => state.movies
  );
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const randomMovies = list
      .sort(() => Math.random() - Math.random())
      .slice(0, 4);
    if (randomMovies.length) {
      const IMAGES = [
        {
          id: 1,
          url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}`,
          rating: 8.5
        },
        {
          id: 2,
          url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}`,
          rating: 7.5
        },
        {
          id: 3,
          url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}`,
          rating: 6.5
        },
        {
          id: 4,
          url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}`,
          rating: 6.5
        }
      ];
      setImages(IMAGES);
    }
  }, [list]);
  const paginate = (type) => {
    let oldPage = page;
    switch (type) {
      case 'prev':
        if (page >= 1) {
          dispatch(setResponsePageNumber(oldPage - 1, totalPages));
        }
        break;
      case 'next':
        if (page <= totalPages) {
          dispatch(setResponsePageNumber(oldPage + 1, totalPages));
        }
        break;
      default:
        break;
    }
    dispatch(getMovies(movieType, oldPage + 1));
  };
  return (
    <div className="main-content">
      {/* display slideshow component */}
      <SlideShow images={images} auto={true} showArrows={true}></SlideShow>
      <div className="grid-movie-title">
        <div className="movieType">{MOVIE_TYPE_HASH[movieType]}</div>
        <div className="paginate">
          <Paginate
            paginate={paginate}
            currentPage={page}
            totalPages={totalPages}
          ></Paginate>
        </div>
      </div>
      {/* display grid component */}
      <Grid images={list}></Grid>
    </div>
  );
};

export default MainContent;
