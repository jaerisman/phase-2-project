import React from 'react';

const HikeCard = ({ hike }) => {
  const { name, image, likes, description } = hike;

  const handleLike = () => {
    console.log("Hike Liked")
  };

  const handleComplete = () => {
    console.log("Hike Completed")
  };

  return (
    <div className="hike-card">
      <h2>{name}</h2>
      <img className="hike-image" src={image} alt={`Image for ${name}`} />
      <div>

      </div>
      <p>{description}</p>
      <p>{likes} Likes</p>
      <button onClick={handleLike}>Like</button>
      <button onClick={handleComplete}>Completed</button>
    </div>
  );
};

export default HikeCard;