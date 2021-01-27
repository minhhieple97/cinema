import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Main.scss';
import {
  loadMoreMovies,
} from '../../redux/actions/movies';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
import SearchResult from '../content/search-result/SearchResult';
import { pathURL } from '../../redux/actions';
const Main = ({ match }) => {
  const { loading, page, totalPages, movieType, searchQuery, searchResult } = useSelector((state) => state.movies);
  const mainRef = useRef();
  const bottomLineRef = useRef();
  const dispatch = useDispatch();
  const fetchData = useCallback(() => {
    if (page < totalPages) {
      dispatch(loadMoreMovies(movieType, page + 1));
    }
  }, [page, totalPages, movieType, dispatch]);
  useEffect(() => {
    dispatch(pathURL(match.path, match.url))
    // eslint-disable-next-line
  }, [])
  const handleScroll = () => {
    if (mainRef.current && bottomLineRef.current) {
      const containerHeight = mainRef.current.getBoundingClientRect().height;
      const {
        top: bottomLineTop
      } = bottomLineRef.current.getBoundingClientRect();
      if (bottomLineTop <= containerHeight) {
        fetchData();
      }
    }
  };
  return (
    <>
      <div className="main" ref={mainRef} onScroll={handleScroll}>
        {loading ? (<Spinner></Spinner>) : (<>
          {(searchQuery && searchResult.length > 0) ? <SearchResult></SearchResult> : <MainContent></MainContent>}
          <div ref={bottomLineRef}></div>
        </>)}
      </div>
    </>
  );
};
export default Main;
