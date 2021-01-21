import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreMovies, setResponsePageNumber } from '../../redux/actions/movies';
import MainContent from '../content/main-content/MainContent';
import Spinner from '../spinner/Spinner';
const Main = () => {
  const { loading, page, totalPages, list } = useSelector(state => state.movies)
  const [currentPage, setCurrentPage] = useState(page);
  const mainRef = useRef();
  const bottomLineRef = useRef();
  const dispatch = useDispatch();
  console.log({ currentPage, list: list.length })
  useEffect(() => {
    if (list.length > 1 && totalPages > 0) {
      console.log("renderrrrrrr...")
      dispatch(loadMoreMovies('now_playing', currentPage))
      dispatch(setResponsePageNumber(currentPage, totalPages))
    }
    // eslint-disable-next-line
  }, [currentPage, totalPages])
  const fetchData = useCallback(
    () => {
      if (page < totalPages) {
        setCurrentPage(prev => prev + 1)
      }
    },
    [page, totalPages],
  )
  const handleScroll = () => {

    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const { top: bottomLineTop } = bottomLineRef.current.getBoundingClientRect();
    console.log({ containerHeight })
    if (bottomLineTop <= containerHeight) {
      fetchData()
    }
  }
  return (
    <>
      <div className="main" ref={mainRef} onScroll={handleScroll} >
        {loading ? <Spinner></Spinner> : <MainContent></MainContent>}
        <div ref={bottomLineRef} ></div>
      </div>
    </>

  );
};
export default Main;
