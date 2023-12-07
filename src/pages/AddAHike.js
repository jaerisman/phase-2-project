import { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function AddAHike(){
    return (
        <>
          <header>
            <Header />
            <NavBar />
          </header>
          <main>
            <p>Add a Hike Form</p>
          </main>
        </>
    );
};

export default AddAHike;