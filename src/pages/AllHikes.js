import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HikesList from "../components/HikesList";

function AllHikes(){
  return (
    <>
      <Header />
      <NavBar />
      <main>
        <HikesList />
      </main>
    </>
  );
};

export default AllHikes;