import { GiHeavyFighter } from "react-icons/gi";
import { IoTimeSharp } from "react-icons/io5";
import { MdStarHalf } from "react-icons/md";
import { Link } from "react-router";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";


const MovieCard = (props) => {
  const { movie } = props || {};
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up">
      <div>
        <img
          className="transition-transform hover:translate-y-4 duration-700 max-h-[600px] min-h-[600px] object-cover w-full"
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
        <Link
          to={`/movie/${movie._id}`}
          className="mt-2 bg-gray-200 hover:bg-[#d96c2c] hover:text-white transition duration-600 text-gray-600 px-5 py-1 cursor-pointer font-medium"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
