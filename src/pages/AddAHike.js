import React, { useState } from 'react';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HikeForm from "../components/HikeForm";

function AddAHike(){
  const [hikes, setHikes] = useState([]);
  
  const addHike = (newHike) => {
    setHikes([...hikes, newHike])
  };
  
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <HikeForm addHike={addHike} />
      </main>
    </>
  );
};

export default AddAHike;