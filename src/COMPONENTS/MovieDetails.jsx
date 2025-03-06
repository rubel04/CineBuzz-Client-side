import { Link, useLoaderData, useNavigate } from "react-router";
import { GiHeavyFighter } from "react-icons/gi";
import { IoTimeSharp } from "react-icons/io5";
import { MdStarHalf } from "react-icons/md";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { TbEdit } from "react-icons/tb";

const MovieDetails = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const movie = useLoaderData();
  const navigate = useNavigate();

  const handleDeleteMovie = (id) => {
    fetch(`https://cinebuzz-server-side.vercel.app/movie/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "You successfully delete a movie!",
            icon: "success",
            draggable: true,
          });
          navigate("/allMovies");
        }
      });
  };
  const handleAddMovieToFavorite = () => {
    fetch(
      `https://cinebuzz-server-side.vercel.app/favoriteMovies?email=${userEmail}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(movie),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "You successfully add movie to favorite list!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center w-11/12 mx-auto">
      <div>
        <img
          className="transition-transform hover:translate-y-4 duration-700"
          src={movie.poster}
          alt="movie poster"
        />
      </div>
      <div className="shadow-xl p-4 md:p-10 space-y-4">
        <h3 className="text-xl font-bold hover:text-[#d96c2c] transition duration-400 ">
          {movie.title}
        </h3>
        <div className="md:w-1/2 flex justify-between items-center text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <GiHeavyFighter className="text-[#d96c2c] text-base" />
            {/* {movie?.genre?.map((genr, idx) => (
              <p key={idx}>{genr},</p>
            ))} */}
            <p>{movie.genre}</p>
          </div>
          <p className="flex items-center">
            <IoTimeSharp className="text-[#d96c2c] text-base" />
            {movie.duration} Mins
          </p>
        </div>
        <div className="md:w-1/2 flex justify-between text-gray-600 text-sm ">
          <p className="flex items-center">
            <MdStarHalf className="text-[#d96c2c] text-xl" />
            {movie.rating}
          </p>
          <p>Release: {movie.releaseYear}</p>
        </div>
        <p className="md:w-2/3 text-gray-600 text-sm mt-8">
          {movie.description}
        </p>
        <div className="flex gap-2 md:gap-6">
          <button
            onClick={handleAddMovieToFavorite}
            className="flex items-center gap-1 bg-gray-200 hover:bg-[#d96c2c] hover:text-white transition duration-600 text-gray-600 px-5 py-1 cursor-pointer font-medium"
          >
            <GrFavorite />
            <span className="hidden md:block">Add To Favorite</span>
          </button>
          <Link
            to={`/updateMovie/${movie._id}`}
            className="flex items-center gap-1 bg-gray-200 hover:bg-[#d96c2c] hover:text-white transition duration-600 text-gray-600 px-5 py-1 cursor-pointer font-medium"
          >
            <TbEdit />
            <span className="hidden md:block">Update Movie</span>
          </Link>
          <button
            onClick={() => handleDeleteMovie(movie._id)}
            className="flex items-center gap-1 bg-gray-200 hover:bg-[#d96c2c] hover:text-white transition duration-600 text-gray-600 px-5 py-1 cursor-pointer font-medium"
          >
            
            <RiDeleteBin5Line />
            <span className="hidden md:block">Delete Movie</span>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
