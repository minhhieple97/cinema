import "./Paginate.scss";
import PropTypes from 'prop-types';
const Paginate = ({ paginate, currentPage, totalPages }) => {
    return (
        <>
            <span className="pageCount" >
                {currentPage} - {totalPages}
            </span>
            <button className={currentPage > 1 ? "paginate-button" : "paginate-button disable"} onClick={() => paginate('prev')} >Prev</button>
            <button className={currentPage < 10 ? "paginate-button" : "paginate-button disable"} onClick={() => paginate('next')} >Next</button>
        </>
    )
}
Paginate.propTypes = {
    paginate: PropTypes.number.isRequired, currentPage: PropTypes.number.isRequired, totalPages: PropTypes.func.isRequired
};
export default Paginate
