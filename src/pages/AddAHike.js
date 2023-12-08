import React from 'react';
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HikeForm from '../components/HikeForm';

function AddAHike(){
    return (
        <div>
          <Header />
          <NavBar />
          <HikeForm />
        </div>
    );
};

export default AddAHike;