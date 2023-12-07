import { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function CompletedHikes(){
    return (
        <>
          <header>
            <Header />
            <NavBar />
          </header>
          <main>
            <p>Completed Hikes List</p>
          </main>
        </>
    );
};

export default CompletedHikes;