import React from 'react';

const HikeCard = ({ hike }) => {
  const { id, name, image, description } = hike;

  return (
    <div className="hike-card">
      <h2>{name}</h2>
      <img className="hike-image" src={image} alt={`Image for ${name}`} />
      <div>

      </div>
      <p>{description}</p>
    </div>
  );
};

export default HikeCard;