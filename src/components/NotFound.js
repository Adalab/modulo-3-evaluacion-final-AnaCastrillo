import React from 'react';
import { Link } from 'react-router-dom';
function NotFound(props) {
  return (
    <>
      <div className="background">
        <div className="detail-notfound">
          <h1>No hemos encontrado el personaje que buscabas</h1>
        </div>
        <Link to="/" className="return">
          Volver
        </Link>
      </div>
    </>
  );
}

export default NotFound;
