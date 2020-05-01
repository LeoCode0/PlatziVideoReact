import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItems.scss';
import play from '../assets/static/play.png';
import add from '../assets/static/mas.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img className='imagenes' src={play} alt='play' />
        <img className='imagenes' src={add} alt='añadir' />
      </div>
      <h3 className='carousel-item__details--title'>
        {title}
      </h3>
      <h4 className='carousel-item__details--subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </h4>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
