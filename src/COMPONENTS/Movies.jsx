import { useEffect, useState } from "react";
import { BiSolidMoviePlay } from "react-icons/bi";
import MovieCard from "./MovieCard";

const Movies = () => {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        fetch('/movies.json')
        .then(res =>res.json())
        .then(data => setMovies(data))
    },[])
    return (
        <div>
            <div className="space-y-2 mb-12">
                <p className="text-3xl text-[#d96c2c]"><BiSolidMoviePlay /></p>
                <p className="text-base font-medium text-gray-600">Browse trending movies</p>
                <h2 className="text-3xl font-bold">Top Featured Movies in <br /> CineBuzz</h2>
            </div>
            <div className="w-10/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)
                }
            </div>
        </div>
    );
};

export default Movies;