import React from "react";
import { Typewriter } from "react-simple-typewriter";

const MovieCategories = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=" grid grid-cols-2 gap-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WeBtBfZkuWoMDrycVC1hTqgCR0Mm6XHdqQ&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WeBtBfZkuWoMDrycVC1hTqgCR0Mm6XHdqQ&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WeBtBfZkuWoMDrycVC1hTqgCR0Mm6XHdqQ&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WeBtBfZkuWoMDrycVC1hTqgCR0Mm6XHdqQ&s"
          alt=""
        />
        <div className="col-span-2 flex justify-end">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5WeBtBfZkuWoMDrycVC1hTqgCR0Mm6XHdqQ&s"
            alt=""
          />
        </div>
      </div>
      
      <div className="border flex justify-center items-center flex-col">
        <h2 className="text-3xl font-bold">
          {/* <Typewriter
            words={["Popular Categories"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1000}
          /> */}
          Popular Categories
        </h2>
        <p className="md:w-1/2">
          All movie at CineBuzz is divided into several categories. It helps you
          to easily navigate between them and find what you like.
        </p>
      </div>
    </div>
  );
};

export default MovieCategories;
