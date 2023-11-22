import NavBar from "../components/NavBar";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Error message: This route does not exist. Please select a different page from the menu.</h1>
      </main>
    </>
  );
}

export default ErrorPage;