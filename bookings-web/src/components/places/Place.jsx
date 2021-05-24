import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './PlaceList.css';

const Place = ({
  id,
  name,
  description,
  location,
  pricePerNight,
  image,
  imageThumbnail,
  maxGuests,
  petFriendly,
  pool,
  wifi,
}) => {
  return (
    <div className={style.listEntry}>
      <ul className={style.placeEntry}>
        <li className={style.placeName}><Link to={`/${id}`}>{name}</Link></li>
        <li className={style.description}>{description}</li>
        <li>{location}</li>
        <li>Price per night: {pricePerNight}</li>
        {/* <li><img alt={name} src={image} /></li> */}
        <li>Max guests: {maxGuests}</li>
        <li>{petFriendly ? 'Pet Friendly' : 'No Pets Allowed'}</li>
        {pool ? <li>Has a Pool!</li> : null}
        {wifi ? <li>Free Wifi</li> : null}
      </ul>
      <img alt={name} src={imageThumbnail} />
    </div>
    
  );
};

Place.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
