import { useSelector } from 'react-redux';
import { IMAGE_URL } from '../../../services/movie';
import LazyImage from '../../lazy-image/LazyImage';
import Rating from '../rating/Rating';
import { Link } from 'react-router-dom';
import '../grid/Grid.scss'
import './SearchResult.scss';
import { Fragment } from 'react';
import { v4 as uuidv4 } from "uuid";
import { formatMovieTitle } from '../../../util';
const SearchResult = () => {
    const { searchResult, searchQuery } = useSelector(state => state.movies);
    return (
        <div className="searchKeyword" >
            <div className="grid-search-title" >
                <div className="grid-text1" >Your search keyword:</div>{' '}
                <div className="grid-text2" >{searchQuery}</div>

            </div>
            <div className="grid">
                {searchResult.length > 0 ? searchResult.map((image, i) => {
                    return (
                        <Fragment key={uuidv4()}>
                            {image.poster_path && <LazyImage
                                className="grid-cell"
                                src={`${IMAGE_URL}${image.poster_path}`}
                                alt="placeholder"
                            >
                                <div className="grid-read-more">
                                    <button className="grid-cell-button"> <Link to={`/${image.id}/${formatMovieTitle(image.title)}/details`} >Read more</Link></button>
                                </div>
                                <div className="grid-detail">
                                    <span className="grid-detail-title">{image.title}</span>
                                    <div className="grid-detail-rating">
                                        <Rating
                                            rating={image.vote_average}
                                            totalStars={10}
                                        ></Rating>
                                       &nbsp;&nbsp;
                                       <div className="grid-vote-average">
                                            {image.vote_average}
                                        </div>
                                    </div>
                                </div>
                            </LazyImage>}

                        </Fragment>
                    );
                }) : <h2>No result is found
                </h2>}
            </div>
        </div>
    );
};

export default SearchResult;
