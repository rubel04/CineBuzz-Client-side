import { GiHeavyFighter } from "react-icons/gi";
import { IoTimeSharp } from "react-icons/io5";
import { MdStarHalf } from "react-icons/md";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const FavoriteMovieCard = (props) => {
  const { movie } = props || {};
  const navigate = useNavigate();
  const handleDeleteFavoriteMovie = (id) => {
    console.log("delete", id);
    fetch(`http://localhost:4000/favoriteMovies/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted movie successfully from favorite list.",
            icon: "success",
            draggable: true,
          });
          navigate("/allMovies");
        }
      });
  };
  return (
    <div>
      <div>
        <img
          className="transition-transform hover:translate-y-4 duration-700"
          src={movie.poster}
          alt="movie poster"
        />
      </div>
      <div className="shadow p-4 md:p-10 space-y-4">
        <h3 className="text-xl font-bold hover:text-[#d96c2c] transition duration-400 ">
          {movie.title}
        </h3>
        <div className="flex justify-between items-center text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <GiHeavyFighter className="text-[#d96c2c] text-base" />
            {/* {movie.genre.map((genr, idx) => (
              <p key={idx}>{genr},</p>
            ))} */}
            <p>{movie.genre}</p>
          </div>
          <p className="flex items-center">
            <IoTimeSharp className="text-[#d96c2c] text-base" />
            {movie.duration} Mins
          </p>
        </div>
        <div className="flex justify-between text-gray-600 text-sm ">
          <p className="flex items-center">
            <MdStarHalf className="text-[#d96c2c] text-xl" />
            {movie.rating}
          </p>
          <p>Release: {movie.releaseYear}</p>
        </div>
        <button
          onClick={() => handleDeleteFavoriteMovie(movie._id)}
          className="mt-2 bg-gray-200 hover:bg-[#d96c2c] hover:text-white transition duration-600 text-gray-600 px-5 py-1 cursor-pointer font-medium"
        >
          Delete Favorite
        </button>
      </div>
    </div>
  );
};

export default FavoriteMovieCard;
