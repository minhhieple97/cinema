import { useSelector } from 'react-redux';
import { IMAGE_URL } from '../../../services/movie';
import LazyImage from '../../lazy-image/LazyImage';
import Rating from '../rating/Rating';
import '../grid/Grid.scss'
import './SearchResult.scss';
import { Fragment } from 'react';
const SearchResult = () => {
    const { searchResult, searchQuery } = useSelector(state => state.movies);
    return (
        <div className="searchKeyword" >
            <div className="grid-search-title" >
                <div className="grid-text1" >Your search keyword:</div>{' '}
                <div className="grid-text2" >{searchQuery}</div>

            </div>
            <div className="grid">
                {searchResult.map((image, i) => {
                    return (
                        <Fragment key={image.id}>
                            {image.poster_path && <LazyImage
                                className="grid-cell"
                                src={`${IMAGE_URL}${image.poster_path}`}
                                alt="placeholder"
                            >
                                <div className="grid-read-more">
                                    <button className="grid-cell-button">Read More</button>
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
                })}
            </div>
        </div>
    );
};

export default SearchResult;
