import React from 'react';
import './errorMessage.css';
import img from './11.png';

const ErrorMessage = () => {
  return (
    <>
      {/* <img src={process.env.PUBLIC_URL + '/img/11.png'} alt="smile" /> */}
      <img className="img-blok" src={img} alt="smile" />
      <span>Something goes wrong</span>
    </>
  );
};

export default ErrorMessage;
