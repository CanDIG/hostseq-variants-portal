import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/css/style.css';

/*
 * 404 ErrorPageNotFound component
 */
function ErrorPageNotFound() {
  return (
    <>
      <div className="content d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-3 m-1 text-navy font-gothic textShadow-grey font-weight-bold ">Error 404</h1>
        <h5 className="mt-1 mb-3 font-gothic text-center">
          Sorry, the page you requested was
          <b>not found</b>
        </h5>
        <div className="d-flex justify-content-around mt-3">
          <Link to="/dashboard/beacon-search" className="d-flex justify-content-center navy-button p-2 mr-3 font-gothic font-weight-bold">Beacon</Link>
          <Link to="/dashboard/help" className="d-flex justify-content-center outline-navy-button p-2 mr-3 text-navy font-gothic font-weight-bold">Help</Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPageNotFound;
