import { useEffect, useState } from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import MovieCard from "./MovieCard";
import { Link } from "react-router";
import { Typewriter } from 'react-simple-typewriter';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://cinebuzz-server-side.vercel.app/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div>
      <div className="space-y-2 mb-12">
        <p className="text-3xl text-[#d96c2c]">
          <BiSolidMoviePlay />
        </p>
        <p className="text-base font-medium text-gray-600">
          Browse trending movies
        </p>
        <h2 className="text-3xl font-bold">
        <Typewriter
            words={['Top Featured Movies in CineBuzz' ]}
            loop={5}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </h2>
        
      </div>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie={movie}></MovieCard>
          ))}
        </div>
        <button className="block m-auto mt-12 ">
        <Link to="/allMovies" className="rounded-full px-8 py-3 cursor-pointer font-medium bg-[#d96c2c] text-white">
          See All Movies
        </Link>
        </button>
        {/* <div className="hidden md:flex flex-col justify-between">
          <img
            className="w-64 h-64 animate-[wiggle_1.5s_ease-in-out_infinite]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEQQFC1SIJBngJyS9bUyuTca6HrsCTVkpjA&s"
            alt="Animated Image"
          />

          <img
            className="animate-pulse"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIgXP1C0u1bupJlv3G2EgYR_lucv0ucxPCQ&s"
            alt=""
          />
          <img
            className=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEQQFC1SIJBngJyS9bUyuTca6HrsCTVkpjA&s"
            alt=""
          />
          <img
            className=""
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBIgXP1C0u1bupJlv3G2EgYR_lucv0ucxPCQ&s"
            alt=""
          />
          <img
            className="animate-pulse transition-transform translate-16"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEQQFC1SIJBngJyS9bUyuTca6HrsCTVkpjA&s"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Movies;
