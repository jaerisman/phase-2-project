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
            <p>Welcome to Hiking CO! Here you can learn about some of Colorado's great hikes, add your own hikes to the CO hiking community, and track which hikes you've completed. Happy hiking!</p>
          </main>
        </>
    );
};

export default Home;