import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { IMAGE_URL } from '../../../../services/movie';
import { getDetailsItem } from '../../../../util';
import './Overview.scss';

const Overview = () => {
    const { movie } = useSelector(state => state.movies);
    const [items, setItems] = useState([]);
    const [details] = useState(movie[0]);
    const [credits] = useState(movie[1]);

    useEffect(() => {
        const detailItems = getDetailsItem(details)
        setItems(detailItems);
        // eslint-disable-next-line
    }, []);


    return (
        <div className="overview">
            <div className="overview-column-1">
                <div className="description">{details.overview}</div>

                <div className="cast">
                    <div className="div-title">Cast</div>
                    <table>
                        {credits.cast.map((data) => (
                            <tbody key={uuidv4()}>
                                <tr>
                                    <td>
                                        <img src={data.profile_path ? `${IMAGE_URL}${data.profile_path}` : 'http://placehold.it/54x81'} alt="" />
                                    </td>
                                    <td>{data.name}</td>
                                    <td>{data.character}</td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
            <div className="overview-column-2">
                <div className="overview-detail">
                    <h6>Production Companies</h6>
                    {details.production_companies.map((prod) => (
                        <div className="product-company" key={uuidv4()}>
                            <img src={prod.logo_path ? `${IMAGE_URL}${prod.logo_path}` : 'http://placehold.it/30x30'} alt="" />
                            <span>{prod.name}</span>
                        </div>
                    ))}
                </div>
                <div className="overview-detail">
                    <h6>Language(s)</h6>
                    <p>
                        {details.spoken_languages.map((language) => (
                            <a href="!#" key={language.name}>
                                {language.name}
                            </a>
                        ))}
                    </p>
                </div>
                {items.map((data) => (
                    <div className="overview-detail" key={data.id}>
                        <h6>{data.name}</h6>
                        <p>
                            <a href="!#">{data.value}</a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Overview;