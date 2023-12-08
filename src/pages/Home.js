import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Home(){
    return (
        <div className="home">
          <header>
            <Header />
            <NavBar />
            <p>Welcome to Hiking CO! Learn about some of Colorado's great hikes and add your own hikes. Happy hiking!</p>
          </header>
          <div className="home-image" />
        </div>
    );
};

export default Home;