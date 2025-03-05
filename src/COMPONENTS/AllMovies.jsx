import { useLoaderData } from "react-router";
import MovieCard from "./MovieCard";
import { BiSolidMoviePlay } from "react-icons/bi";
import { Typewriter } from "react-simple-typewriter";

const AllMovies = () => {
  const allMovies = useLoaderData();
  return (
    <div className="md:w-9/12 mx-auto p-4 md:p-0">
      <div className="space-y-2 mb-12">
        <p className="text-3xl text-[#d96c2c]">
          <BiSolidMoviePlay />
        </p>
        <p className="text-base font-medium text-gray-600">
          Explore Top-Rated Films Find Your Next Favorite
        </p>
        <h2 className="text-3xl font-bold">
          <Typewriter
            words={["Browse, Watch & Enjoy – Movies Made Simple!"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
