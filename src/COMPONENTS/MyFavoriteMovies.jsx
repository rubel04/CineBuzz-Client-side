import { useLoaderData } from "react-router";
import MovieCard from "./MovieCard";
import { BiSolidMoviePlay } from "react-icons/bi";

const MyFavoriteMovies = () => {
    const favoriteMovies = useLoaderData();
    return (
        <div className="mt-6 w-11/12 mx-auto">
            <div className="space-y-2 mb-12">
                    <p className="text-3xl text-[#d96c2c]">
                      <BiSolidMoviePlay />
                    </p>
                    <p className="text-base font-medium text-gray-600">
                    Instant Access to Favorite Movie
                    </p>
                    <h2 className="text-3xl font-bold">
                    Find Your Next Favorite <br /> Movie in Seconds!
                    </h2>
                  </div>
            <div className="md:w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteMovies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
        </div>
    );
};

export default MyFavoriteMovies;