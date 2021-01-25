import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/cinema-logo.svg';
import { getMovies, searchMovieQuery, setLoading, setMovieType } from '../../redux/actions';
import { HEADER_LIST } from '../../util/constants';
import './Header.scss';
const Header = () => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);
  const { movieType } = useSelector((state) => ({ ...state.movies }));
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectToHomePage = () => history.push('/')
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
      dispatch(setLoading(true))
      setTimeout(() => {
        dispatch(searchMovieQuery(e.target.value))
      }, 2000);
    }
  }

  useEffect(() => {
    dispatch(getMovies(movieType));
    // eslint-disable-next-line
  }, [movieType]);


  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image" style={{ cursor: "pointer" }} onClick={redirectToHomePage} >
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
                <li key={el.id} className={el.type === movieType ? "header-nav-item active-item" : "header-nav-item"} onClick={() => {
                  dispatch(setMovieType(el.type))
                }} >
                  <span className="header-list-name">
                    <i className={el.iconClass}></i>
                  </span>
                  &nbsp;
                  <span className="header-list-name">{el.name}</span>
                </li>
              );
            })}

            <input
              className="search-input"
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
