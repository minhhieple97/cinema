import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setError } from '../../redux/actions';
import './ErrorPage.scss';
const ErrorPage = (props) => {
  const { clearState } = props;
  const history = useHistory();
  const dispatch = useDispatch()
  const navigateToHomePage = () => {
    clearState();
    history.push('/');
    dispatch(setError({ message: '', statusCode: null }))
  };
  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Something went wrong.</p>
      <span className="error-link" onClick={() => navigateToHomePage()}>
        <i className="icon-home"></i> Go back to home page.
      </span>
    </div>
  );
};
export default ErrorPage;
