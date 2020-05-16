import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItems.scss';
import play from '../assets/static/play.png';
import add from '../assets/static/mas.png';
import remove from '../assets/static/remove-icon.png';

import { setFavorite, deleteFavorite } from '../actions/index';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration } = props;

  const handleSetFavorite = () => {
    props.setFavorite(
      {
        id, cover, title, year, contentRating, duration,
      },
    );
  };

  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
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
          <img
            src={remove}
            alt='remove'
            className='imagenes'
            onClick={() => handleDeleteFavorite(id)}
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
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
