import React from 'react';
import SlideShow from '../slide-show/SlideShow';
import './MainContent.scss';
const MainContent = () => {
  return (
    <div className="main-content">
      {/* display slideshow component */}
      <SlideShow></SlideShow>
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
