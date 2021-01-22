import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/cinema-logo.svg';
import { getMovies, setMovieType } from '../../redux/actions/movies';
import { HEADER_LIST } from '../../util/constants';
import './Header.scss';
const Header = () => {
  const [navClass, setNavClass] = useState(false);
  const [menuClass, setMenuClass] = useState(false);
  const { movieType } = useSelector((state) => ({ ...state.movies }));
  const toggleMenu = () => {
    setNavClass(!navClass);
    setMenuClass(!menuClass);
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(movieType));
    // eslint-disable-next-line
  }, [movieType]);


  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
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
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
