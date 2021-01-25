import React from 'react';
import { DETAILITEMS } from '../../../../util/constants';
import './Overview.scss';
const Overview = () => {
    return (
        <div className="overview">
            <div className="overview-column-1">
                <div className="description">This is a description about the movie</div>

                <div className="cast">
                    <div className="div-title">Cast</div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <img src="http://placehold.it/54x81" alt="" />
                                </td>
                                <td>Robert Downing Jr.</td>
                                <td>Iron Man</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="overview-column-2">
                <div className="overview-detail">
                    <h6>Production Companies</h6>
                    <div className="product-company">
                        <img src="http://placehold.it/30x30" alt="" />
                        <span>Marvel</span>
                    </div>
                </div>
                <div className="overview-detail">
                    <h6>Language(s)</h6>
                    <p>
                        <a href="!#">English</a>
                    </p>
                </div>
                {DETAILITEMS.map((data) => (
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