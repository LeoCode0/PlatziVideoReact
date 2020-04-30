import React from 'react';
import '../assets/styles/components/CarouselItems.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='https://images.pexels.com/photos/3363341/pexels-photo-3363341.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='house' />
    <div className='carousel-item__details'>
      <div>
        <img className='imagenes' src='images/play.png' alt='play' />
        <img className='imagenes' src='images/mas.png' alt='añadir' />
      </div>
      <h3 className='carousel-item__details--title'>
        Titulo descriptivo
      </h3>
      <h4 className='carousel-item__details--subtitle'>
        2019 16+ 114 min
      </h4>
    </div>
  </div>
);

export default CarouselItem;
