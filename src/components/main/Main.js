import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Main.scss';
import {
  loadMoreMovies,
  setResponsePageNumber
} from '../../redux/actions/movies';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
const Main = () => {
  const { loading, page, totalPages } = useSelector((state) => state.movies);
  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setResponsePageNumber(currentPage, totalPages));
    // eslint-disable-next-line
  }, [currentPage, totalPages]);
  const fetchData = useCallback(() => {
    if (page < totalPages) {
      setCurrentPage((prev) => {
        dispatch(loadMoreMovies('now_playing', prev + 1));
        return prev + 1;
      });
    }
  }, [page, totalPages, dispatch]);
  const handleScroll = () => {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const {
      top: bottomLineTop
    } = bottomLineRef.current.getBoundingClientRect();
    if (bottomLineTop <= containerHeight) {
      fetchData();
    }
  };
  return (
    <>
      <div className="main" ref={mainRef} onScroll={handleScroll}>
        {loading ? <Spinner></Spinner> : <MainContent></MainContent>}
        <div ref={bottomLineRef}></div>
      </div>
    </>
  );
};
export default Main;
