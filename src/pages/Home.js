import Header from "../components/Header";
import NavBar from "../components/NavBar";

function Home(){
    return (
        <div className="home">
          <div className="home-image" />
          <header>
            <Header />
            <p>Welcome to Hiking CO! Learn about some of Colorado's great hikes, or add your own hikes. Happy hiking!</p>
            <NavBar />
          </header>
          <main>
            <p>Welcome to Hiking CO! Learn about some of Colorado's great hikes, or add your own hikes. Happy hiking!</p>
          </main>
        </div>
    );
};

export default Home;