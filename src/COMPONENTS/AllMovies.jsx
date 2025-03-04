import { useLoaderData } from "react-router";
import MovieCard from "./MovieCard";
import { BiSolidMoviePlay } from "react-icons/bi";

const AllMovies = () => {
  const allMovies = useLoaderData();
  return (
    <div className="md:w-11/12 mx-auto mt-12">
      <div className="space-y-2 mb-12">
        <p className="text-3xl text-[#d96c2c]">
          <BiSolidMoviePlay />
        </p>
        <p className="text-base font-medium text-gray-600">
        Find Your Next Favorite
        </p>
        <h2 className="text-3xl font-bold">
        Browse, Watch & Enjoy – <br /> Movies Made Simple!
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
