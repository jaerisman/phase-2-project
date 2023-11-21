import Home from "./components/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }
];

export default routes;