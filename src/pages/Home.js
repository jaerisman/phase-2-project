import { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Home(){
    return (
        <>
          <header>
            <Header />
            <NavBar />
          </header>
          <main>
            <h3>Welcome to Hiking CO! Learn about some of Colorado's great hikes, add your own hikes, and track the ones you've completed. Happy hiking!</h3>
          </main>
        </>
    );
};

export default Home;