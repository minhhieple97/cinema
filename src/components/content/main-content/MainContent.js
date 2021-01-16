import React from 'react';
import SlideShow from '../slide-show/SlideShow';
import './MainContent.scss';
const MainContent = () => {
  const images = [
    {
      url:
        'https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      url:
        'https://seido.vn/wp-content/uploads/2020/12/Colorful-Geometric-Simple-Background-Image.jpg'
    },
    {
      url:
        'https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg'
    }
  ];
  return (
    <div className="main-content">
      {/* display slideshow component */}
      <SlideShow images={images} auto={true} showArrows={true}></SlideShow>
      <div className="grid-movie-title">
        <div className="movieType">Now playing</div>
        <div className="paginate">Paginate</div>
      </div>
      {/* display grid component */}
      Main Content
    </div>
  );
};

export default MainContent;
