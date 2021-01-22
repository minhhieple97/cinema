import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Main.scss';
import {
  loadMoreMovies,
} from '../../redux/actions/movies';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
const Main = () => {
  const { loading, page, totalPages, movieType } = useSelector((state) => state.movies);
  // const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    if (page < totalPages) {
      dispatch(loadMoreMovies(movieType, page + 1));
    }
  }, [page, totalPages, movieType, dispatch]);
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
