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
import MyFavoriteMovies from "../COMPONENTS/MyFavoriteMovies";
import UpdateMovie from "../COMPONENTS/UpdateMovie";

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
        loader: ({params}) => fetch(`https://cinebuzz-server-side.vercel.app/movie/${params.id}`)
      },
      {
        path: '/addMovies',
        element: <PrivateRoute><AddMovies /></PrivateRoute> ,
      },
      {
        path: '/updateMovie/:id',
        element: <PrivateRoute><UpdateMovie /></PrivateRoute> ,
        loader: ({params}) => fetch(`https://cinebuzz-server-side.vercel.app/movie/${params.id}`)
      },
      {
        path: '/allMovies',
        element: <AllMovies/>,
        loader: () => fetch('https://cinebuzz-server-side.vercel.app/allMovies')
      },
      {
        path: '/myFavorites',
        element: <PrivateRoute><MyFavoriteMovies></MyFavoriteMovies></PrivateRoute>,
        loader: ()=> fetch('https://cinebuzz-server-side.vercel.app/favoriteMovies')
      }
    ],
  },
]);

export default router;
