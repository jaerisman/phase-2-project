import Home from "./pages/Home";
import AllHikes from "./pages/AllHikes";
import CompletedHikes from "./pages/CompletedHikes";
import AddAHike from "./pages/AddAHike";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/all-hikes",
    element: <AllHikes />,
    errorElement: <ErrorPage />
  },
  {
    path: "/completed-hikes",
    element: <CompletedHikes />,
    errorElement: <ErrorPage />
  },
  {
    path: "/add-a-hike",
    element: <AddAHike />,
    errorElement: <ErrorPage />
  }
];

export default routes;