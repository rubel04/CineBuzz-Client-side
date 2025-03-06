import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { useTheme } from "../Hooks/UseTheme";

const AddMovies = () => {
  const { user } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const {mode} = useTheme();
  const handleAddMovie = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const poster = form.poster.value;
    const duration = form.duration.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const releaseYear = form.releaseYear.value;
    const genre = form.genre.value;
    const email = user?.email;

    const newMovie = {
      email,
      title,
      poster,
      duration,
      rating,
      description,
      releaseYear,
      genre,
    };
    // console.log(newMovie);

    const newError = {};
    if (!title || title.length < 2)
      newError.title = "Title must be at least 2 characters.";
    if (!title || !/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(poster))
      newError.poster = "Poster must be a valid image URL.";
    if (!duration || isNaN(duration) || duration < 60) newError.duration = "Duration must be at least 60 minutes.";
    if (!rating) newError.rating = "Please select a rating.";
    if (!description || description.length < 10)
      newError.description = "Summary must be at least 10 characters.";
    if (!releaseYear) newError.releaseYear = "Please select a release year.";
    if (!genre) newError.genre = "Please select a genre.";

    setError(newError);
    if (Object.keys(newError).length === 0) {
      // console.log("condition fulfill", newMovie);
      fetch("https://cinebuzz-server-side.vercel.app/movies", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newMovie),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "You successfully add a movie!",
              icon: "success",
              draggable: true,
            });
            form.reset();
            navigate('/allMovies')
          }
        });
    }
  };

  return (
    <div className={`${mode === "dark" && 'bg-black border'} md:3/4 lg:w-2/5 mx-auto md:mb-12 md:mt-8  p-6 md:p-12 rounded`}>
      <h3 className="text-3xl mb-4 font-bold">Add New Movie</h3>
      <form onSubmit={handleAddMovie}>
        <div className="flex gap-4">
          <div className="w-full">
            <label htmlFor="">Movie Title</label> <br />
            <input
              className="input w-full mt-1 pl-4"
              type="text"
              placeholder="Title"
              name="title"
            />
            {error.title && (
              <p className="text-sm text-red-500">{error.title}</p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="">Movie Poster</label> <br />
            <input
              className="input w-full mt-1 pl-4"
              type="text"
              placeholder="Poster"
              name="poster"
            />
            {error.poster && (
              <p className="text-sm text-red-500">{error.poster}</p>
            )}
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="">Duration</label> <br />
          <input
            className="input w-full mt-1 pl-4"
            type="number"
            placeholder="Duration"
            name="duration"
          />
          {error.duration && (
            <p className="text-sm text-red-500">{error.duration}</p>
          )}
        </div>
        <div>
          <fieldset className="fieldset">
            <legend className="text-base">Genre</legend>
            <select className="select w-full" name="genre">
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Horror">Horror</option>
              <option value="Action">Action</option>
              <option value="Crime">Crime</option>
              <option value="Romantic">Romantic</option>
              <option value="Adventure">Adventure</option>
            </select>
          </fieldset>
          {error.genre && <p className="text-sm text-red-500">{error.genre}</p>}
        </div>
        <div>
          <fieldset className="fieldset">
            <legend className="text-base">Release Year</legend>
            <select className="select w-full" name="releaseYear">
              <option value="2001">2001</option>
              <option value="2002">2002</option>
              <option value="2003">2003</option>
              <option value="2004">2004</option>
              <option value="2005">2005</option>
              <option value="2006">2006</option>
              <option value="2007">2007</option>
              <option value="2008">2008</option>
              <option value="2009">2009</option>
              <option value="2009">2010</option>
              <option value="2011">2011</option>
              <option value="2012">2012</option>
              <option value="2013">2013</option>
              <option value="2014">2014</option>
              <option value="2015">2015</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </fieldset>
          {error.releaseYear && (
            <p className="text-sm text-red-500">{error.releaseYear}</p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="">Rating</label> <br />
          <input
            className="input w-full mt-1 pl-4"
            type="text"
            placeholder="Rating"
            name="rating"
          />
          {error.rating && (
            <p className="text-sm text-red-500">{error.rating}</p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="">Description</label> <br />
          <textarea
            className="input h-20 w-full mt-1 p-4"
            type="text"
            placeholder="Short Description"
            name="description"
          />
          {error.description && (
            <p className="text-sm text-red-500">{error.description}</p>
          )}
        </div>
        <button
          type="submit"
          className="mt-6 w-full px-6 py-2 rounded cursor-pointer font-medium bg-[#d96c2c] text-white"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovies;
