import React, { useState, useEffect } from 'react';
import HikeCard from './HikeCard';

const HikesList = () => {
    const [hikes, setHikes] = useState([]);
  
    useEffect(() => {
      fetch("http://localhost:3001/hikes")
        .then((response) => response.json())
        .then((data) => setHikes(data));
    }, []);
    
    return (
      <div className="hike-list">
        {hikes.map((hike) => (
          <HikeCard key={hike.id} hike={hike} />
        ))}
      </div>
    );
  };

export default HikesList;