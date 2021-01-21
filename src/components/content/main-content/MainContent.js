import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IMAGE_URL } from '../../../services/movie';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import SlideShow from '../slide-show/SlideShow';
import './MainContent.scss';
const MainContent = () => {
  const { list, page, totalPages } = useSelector(state => state.movies)
  const [images, setImages] = useState([])
  useEffect(() => {
    const randomMovies = list.sort(() => Math.random() - Math.random()).slice(0, 4);
    if (randomMovies.length) {
      const IMAGES = [
        {
          id: 1,
          url:
            `${IMAGE_URL}/${randomMovies[0].backdrop_path}`,
          rating: 8.5
        },
        {
          id: 2,
          url:
            `${IMAGE_URL}/${randomMovies[1].backdrop_path}`,
          rating: 7.5
        },
        {
          id: 3,
          url:
            `${IMAGE_URL}/${randomMovies[2].backdrop_path}`,
          rating: 6.5
        },
        {
          id: 4,
          url:
            `${IMAGE_URL}/${randomMovies[3].backdrop_path}`,
          rating: 6.5
        }
      ];
      setImages(IMAGES)
    }
  }, [list])
  const [currentPage, setCurrentPage] = useState(1);
  const paginate = (type) => {
    switch (type) {
      case 'prev':
        if (currentPage >= 1) {
          setCurrentPage((prevState) => (prevState -= 1));
        }
        break;
      case 'next':
        if (currentPage <= totalPages) {
          setCurrentPage((prevState) => (prevState += 1));
        }
        break;
      default:
        break;
    }
  };
  return (
    <div className="main-content">
      {/* display slideshow component */}
      <SlideShow images={images} auto={true} showArrows={true}></SlideShow>
      <div className="grid-movie-title">
        <div className="movieType">Now playing</div>
        <div className="paginate">
          <Paginate
            paginate={paginate}
            currentPage={currentPage}
            totalPages={totalPages}
          ></Paginate>
        </div>
      </div>
      {/* display grid component */}
      <Grid images={list}></Grid>
      Main Content
    </div>
  );
};

export default MainContent;
