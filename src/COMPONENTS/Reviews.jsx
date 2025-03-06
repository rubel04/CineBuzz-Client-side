import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineReviews } from "react-icons/md";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="">
      <div className="space-y-2 mb-12">
        <p className="text-3xl text-[#d96c2c]">
          <MdOutlineReviews />
        </p>
        <p className="text-base font-medium text-gray-600">Best Reviews</p>
        <h2 className="text-3xl font-bold">
          <Typewriter
            words={[
              "Hear It from Our Happy Users!",
              "See Why Movie Enthusiasts Love CineBuzz",
              "Top Reviews from CineBuzz Fans"
            ]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={70}
            delaySpeed={1000}
          />
        </h2>
      </div>
      <div className="flex flex-wrap gap-6">
        {reviews.map((review) => (
          <div key={review.name} className="max-w-[350px]">
            <div className="shadow px-14 py-4 rounded-lg" data-aos="fade-up">
              <div className="flex justify-center">
                <img
                  className="w-14 h-14 rounded-full"
                  src={review.image}
                  alt=""
                />
              </div>
              <h2 className="text-xl text-center  mt-3">{review.name}</h2>
              <div className="rating flex justify-center my-2">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-center">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
