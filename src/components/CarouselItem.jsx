import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItems.scss';
import play from '../assets/static/play.png';
import add from '../assets/static/mas.png';

import { setFavorite } from '../actions/index';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration } = props;

  const handleSetFavorite = () => {
    props.setFavorite(
      {
        id, cover, title, year, contentRating, duration,
      },
    );
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img className='imagenes' src={play} alt='play' />
          <img
            className='imagenes'
            src={add}
            alt='añadir'
            onClick={handleSetFavorite}
          />
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
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
