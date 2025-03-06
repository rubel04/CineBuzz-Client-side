import React from "react";
import { Link } from "react-router";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";


const MovieCategories = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="md:flex justify-between items-center mt-20 w-11/12 mx-auto">
      <div data-aos="fade-right" className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="cursor-pointer transition-transform hover:scale-110 duration-700 relative">
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WeBtBfZkuWoMDrycVC1hTqgCR0Mm6XHdqQ&s"
            alt=""
          />
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-100 bg-black/30">
            Drama
          </p>
        </div>
        <div className="cursor-pointer transition-transform hover:scale-110 duration-700 relative">
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZcmcerCwHs-KEJ73zD_DpgaooH6bA4ce1Ww&s"
            alt=""
          />
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-100 bg-black/30">
            Horror
          </p>
        </div>
        <div className="cursor-pointer transition-transform hover:scale-110 duration-700 relative">
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKuYtCIEmbtP3x0_8OgeVJjq6Ca4CSPhnokQ&s"
            alt=""
          />
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-100 bg-black/30">
            Action
          </p>
        </div>
        <div className="cursor-pointer transition-transform hover:scale-110 duration-700 relative">
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1U5nvNExSsR6MzprcEBg8Zz0GyTQibaF8dg&s"
            alt=""
          />
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-100 bg-black/30">
            Comedy
          </p>
        </div>
        <div className="cursor-pointer transition-transform hover:scale-110 duration-700 relative">
          <img
            className="w-full h-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRpDp4tZLAMkZLHFbakQUq8gmyK3A1AX6QA&s"
            alt=""
          />
          <p className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-gray-100 bg-black/30">
            Adventure
          </p>
        </div>
      </div>
      <div data-aos="fade-left" className="flex-1 flex justify-center">
        <div className="md:w-1/2 space-y-4 mt-4 md:mt-0">
          <h2 className="text-3xl font-bold">
            Popular <br /> Categories
          </h2>
          <p>
            All movie at CineBuzz is divided into several categories. It helps
            you to easily navigate between them and find what you like.
          </p>
          <button className="mt-12 ">
            <Link
              to="/allMovies"
              className="rounded-full px-8 py-3 cursor-pointer font-medium bg-[#d96c2c] text-gray-100"
            >
              See All Category
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCategories;
