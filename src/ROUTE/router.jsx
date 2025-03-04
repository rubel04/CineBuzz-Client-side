import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import Login from "../PAGES/Login";
import SignUp from "../PAGES/SignUp";
import MovieDetails from "../COMPONENTS/MovieDetails";
import PrivateRoute from "./PrivateRoute";
import AddMovies from "../COMPONENTS/AddMovies";
import Home from "../PAGES/Home";
import AllMovies from "../COMPONENTS/AllMovies";
import ErrorPage from "../PAGES/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage /> ,
    children: [
      {
        path: "/",
        element: <Home />,
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
      },
      {
        path: '/addMovies',
        element: <PrivateRoute><AddMovies /></PrivateRoute> ,
      },
      {
        path: '/allMovies',
        element: <AllMovies/>,
        loader: () => fetch('http://localhost:4000/allMovies')
      }
    ],
  },
]);

export default router;
