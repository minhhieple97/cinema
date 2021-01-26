import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../assets/cinema-logo.svg';
import {
  clearMovieDetails,
  getMovies,
  searchMovieQuery,
  setLoading,
  setMovieType
} from '../../redux/actions';
import { HEADER_LIST } from '../../util/constants';
import './Header.scss';
const Header = () => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);
  const { movieType } = useSelector((state) => ({ ...state.movies }));
  const [disableSearch, setDisableSearch] = useState(false)
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const redirectToHomePage = () => {
    dispatch(clearMovieDetails());
    setDisableSearch(false)
    history.push('/');
  };
  const toggleMenu = () => {
    setNavClass(!navClass);
    setMenuClass(!menuClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };
  const handleSearchChange = (e) => {
    const query = e.target.value;
    if (query && query.length < 128) {
      dispatch(setLoading(true));
      setTimeout(() => {
        dispatch(searchMovieQuery(e.target.value));
      }, 2000);
    }
  };
  useEffect(() => {
    dispatch(getMovies(movieType));
    if (location.pathname !== '/' && location.key) {
      setDisableSearch(true)
    }
  }, [movieType, dispatch, location, disableSearch]);
  const handleChangeMovieType = (type) => {
    setDisableSearch(false);
    if (location.pathname !== '/') {
      dispatch(clearMovieDetails());
      history.push('/');
      dispatch(setMovieType(type));
    } else {
      dispatch(setMovieType(type));
    }
  }
  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div
            className="header-image"
            style={{ cursor: 'pointer' }}
            onClick={redirectToHomePage}
          >
            <img src={logo} alt="" />
          </div>
          <div
            className={`${menuClass ? 'header-menu-toggle is-active' : 'header-menu-toggle'
              }`}
            id="header-mobile-menu"
            onClick={() => toggleMenu()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul
            className={`${navClass ? 'header-nav header-mobile-nav' : 'header-nav'
              }`}
          >
            {HEADER_LIST.map((el) => {
              return (
                <li
                  key={el.id}
                  className={
                    el.type === movieType
                      ? 'header-nav-item active-item'
                      : 'header-nav-item'
                  }
                  onClick={handleChangeMovieType.bind(null, el.type)}
                >
                  <span className="header-list-name">
                    <i className={el.iconClass}></i>
                  </span>
                  &nbsp;
                  <span className="header-list-name">{el.name}</span>
                </li>
              );
            })}

            <input
              className={`search-input ${disableSearch ? 'disabled' : ''}`}
              type="text"
              placeholder="Search for a movie"
              onChange={handleSearchChange}
            // value={searchQuery}
            />
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
