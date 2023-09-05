import React from 'react';
import BannerImagem from './../../assets/a4.png'

import './Banner.css';

function Banner () {

  return (
    <div className="container_banner">
      <img src={BannerImagem} alt="Banner" />
    </div>
  );
};

export default Banner;