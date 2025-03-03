import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import Login from "../PAGES/Login";
import SignUp from "../PAGES/SignUp";
import Home from "../COMPONENTS/Home";
import MovieDetails from "../COMPONENTS/MovieDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader : () => fetch('/movies.json')
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: '/movie/:id',
        element: <PrivateRoute><MovieDetails /></PrivateRoute> ,
        loader: () => fetch('/movie.json')
      }
    ],
  },
]);

export default router;
