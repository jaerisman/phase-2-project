import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <Header />
        <NavBar />
      </header>
      <main>
        <h2>Error message: This page does not exist. Please select a different page from the menu.</h2>
      </main>
    </>
  );
}

export default ErrorPage;