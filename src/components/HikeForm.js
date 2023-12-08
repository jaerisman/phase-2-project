import React, { useState } from 'react';

function HikeForm (){
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newHike = {
            name, 
            image,
            description,
        };

        fetch('http://localhost:3001/hikes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newHike),
        })
            .then((response) => response.json())
            .then((data) => {})

        setName('');
        setImage('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
      <label>
        Hike Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hike Image (Link):
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hike Description (50-word maximum):
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Hike</button>
    </form>
  );
};

export default HikeForm;