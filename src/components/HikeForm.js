import React, { useState } from 'react';

function HikeForm ({ addHike }){
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
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newHike),
        })
            .then((response) => response.json())
            .then((data) => {
                addHike(data);
                setName('');
                setImage('');
                setDescription('');
            })
    };

    return (
        <form onSubmit={handleSubmit}>
        <label className='hike-name'>
            Hike Name:
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter hike name'
            />
        </label>
        <br />
        <label>
            Hike Image:
            <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder='Enter image URL'
            />
        </label>
        <br />
        <label>
            Hike Description:
            <br></br>
            <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Enter hike description'
            />
        </label>
        <br />
        <button type="submit">Add Hike</button>
        </form>
    );
};

export default HikeForm;