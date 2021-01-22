import './Paginate.scss';
import PropTypes from 'prop-types';
const Paginate = ({ paginate, currentPage, totalPages }) => {
  return (
    <>
      <span className="pageCount">
        {currentPage} - {totalPages}
      </span>
      <button
        className={
          currentPage > 1 ? 'paginate-button' : 'paginate-button disable'
        }
        onClick={() => paginate('prev')}
      >
        Prev
      </button>
      <button
        className={
          currentPage < totalPages ? 'paginate-button' : 'paginate-button disable'
        }
        onClick={() => paginate('next')}
      >
        Next
      </button>
    </>
  );
};
Paginate.propTypes = {
  paginate: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired
};
export default Paginate;
