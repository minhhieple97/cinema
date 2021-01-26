import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ErrorPage.scss';
const ErrorPage = ({ clearState }) => {
  const history = useHistory();
  const navigateToHomePage = () => {
    clearState();
    history.push('/');
  };
  return (
    <div className="error-page">
      <h1 className="error-header">Oops!</h1>
      <p className="error-msg">Something went wrong.</p>
      <Link className="error-link" onClick={() => navigateToHomePage()}>
        <i className="icon-home"></i> Go back to home page.
      </Link>
    </div>
  );
};
export default ErrorPage;
