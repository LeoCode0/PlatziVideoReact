import React from 'react';
import '../assets/styles/components/NotFound.scss';

const NotFound = () => (
  <React.Fragment>
    <div className='container'>
      <div className='container__error'>
        <img src='https://img.icons8.com/dotty/80/000000/break.png' alt='Not found' />
        <h1>404</h1>
        <p>Página no encontrada</p>
      </div>
    </div>
  </React.Fragment>
);

export default NotFound;
