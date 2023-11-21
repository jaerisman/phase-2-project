import Home from "./components/Home";
import AllHikes from "./components/AllHikes"
import CompletedHikes from "./components/CompletedHikes"

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <AllHikes />,
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    element: <CompletedHikes />,
    errorElement: <ErrorPage />
  },
];

export default routes;