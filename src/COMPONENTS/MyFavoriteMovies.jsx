import { useLoaderData } from "react-router";
// import MovieCard from "./MovieCard";
import { BiSolidMoviePlay } from "react-icons/bi";
import FavoriteMovieCard from "./FavoriteMovieCard";
import { Typewriter } from "react-simple-typewriter";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const MyFavoriteMovies = () => {
  const loadedMovies = useLoaderData();
  const {user}= useContext(AuthContext);
  const email = user.email;
  const favoriteMovies = loadedMovies.filter(movies => movies.email === email);
  return (
    <div className="mt-6 w-11/12 mx-auto">
      {favoriteMovies.length === 0 ? (
        <div className="my-32 flex flex-col items-center justify-center gap-2">
          <p className="text-gray-600 text-3xl">No movies found.</p>
          <p className="text-gray-800 text-xl"> Add movie to your favorites!</p>
        </div>
      ) : (
        <div>
          <div className="space-y-2 mb-12">
            <p className="text-3xl text-[#d96c2c]">
              <BiSolidMoviePlay />
            </p>
            <p className="text-base font-medium text-gray-600">
              Instant Access to Favorite Movie
            </p>

            <h2 className="text-3xl font-bold">
              <Typewriter
                words={["Find Your Next Favorite Movie in Seconds!"]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={1000}
              />
            </h2>
          </div>
          <div className="md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteMovies.map((movie) => (
              <FavoriteMovieCard
                key={movie._id}
                movie={movie}
              ></FavoriteMovieCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyFavoriteMovies;
