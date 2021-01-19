import React, { useState } from 'react';
import Grid from '../grid/Grid';
import Paginate from '../paginate/Paginate';
import SlideShow from '../slide-show/SlideShow';
import './MainContent.scss';
const MainContent = () => {
  const images = [
    {
      url:
        'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      rating: 8.5
    },
    {
      url:
        'https://seido.vn/wp-content/uploads/2020/12/Colorful-Geometric-Simple-Background-Image.jpg',
      rating: 7.5
    },
    {
      url:
        'https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg',
      rating: 6.5
    }
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(10);
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
      <Grid images={images}></Grid>
      Main Content
    </div>
  );
};

export default MainContent;
