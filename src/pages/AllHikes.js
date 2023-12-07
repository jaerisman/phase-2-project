import { useState, useEffect } from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

function AllHikes(){
    return (
        <>
          <header>
            <Header />
            <NavBar />
          </header>
          <main>
            <p>All Hikes List</p>
          </main>
        </>
    );
};

export default AllHikes;