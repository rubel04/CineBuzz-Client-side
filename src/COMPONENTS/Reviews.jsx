import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";


const Reviews = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="px-24">
      <h2 className="text-3xl font-semibold text-center mt-6">
        Why our customer love us?
      </h2>
      <div className="flex justify-start mt-10">
        <div className="w-1/3">
          <div
            className="border-2 py-4 text-pink-100  bg-purple-500 rounded-lg  px-14"
            data-aos="fade-left"
          >
            <div className="flex justify-center">
              <img
                className="w-14 h-14 rounded-full"
                src="https://i.ibb.co/6Pq2TW2/r-3.webp"
                alt=""
              />
            </div>
            <h2 className="text-xl text-center  mt-3">John Smith</h2>
            <div className="rating flex justify-center my-2 my-2enter">
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
            <p className="text-center">
              Exceptional wedding planning service! They took our vision and
              turned it into a breathtaking reality. Every detail was flawless,
              and our special day was truly magical
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-1/3">
          <div
            className="border-2 px-14 py-4 text-pink-100  bg-purple-500 rounded-lg text-"
            data-aos="fade-right"
          >
            <div className="flex justify-center">
              <img
                className="w-14 h-14 rounded-full"
                src="https://i.ibb.co/kgrC7gX/r-4.jpg"
                alt=""
              />
            </div>
            <h2 className="text-xl text-center  mt-3">David Clark</h2>
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
            <p className="text-center">
              We celebrated a memorable birthday party with their team. The
              creativity and enthusiasm they brought to the event were
              outstanding. Our guests had a blast!
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="w-1/3">
          <div
            className="border-2 px-14 py-4 text-pink-100  bg-purple-500 rounded-lg text-"
            data-aos="fade-left"
          >
            <div className="flex justify-center">
              <img
                className="w-14 h-14 rounded-full"
                src="https://i.ibb.co/mSPVGsM/r-5.jpg"
                alt=""
              />
            </div>
            <h2 className="text-xl text-center  mt-3">James Davis</h2>
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
            <p className="text-center">
              Our anniversary celebration was a huge success, thanks to this
              company. They personalized every aspect, making it a romantic and
              unforgettable evening. Highly recommended
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-1/3">
          <div
            className="border-2 px-14 py-4 text-pink-100  bg-purple-500 rounded-lg text-"
            data-aos="fade-right"
          >
            <div className="flex justify-center">
              <img
                className="w-14 h-14 rounded-full"
                src="https://i.ibb.co/26Ytvyk/r-6.jpg"
                alt=""
              />
            </div>
            <h2 className="text-xl text-center  mt-3">Michael Taylor</h2>
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
            <p className="text-center">
              The engagement party they organized for us was beyond amazing. The
              decor, entertainment, and overall atmosphere were perfect. It set
              the tone for our beautiful journey ahead.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="w-1/3">
          <div
            className="border-2 px-14 py-4 text-pink-100  bg-purple-500 rounded-lg text-"
            data-aos="fade-left"
          >
            <div className="flex justify-center">
              <img
                className="w-14 h-14 rounded-full"
                src="https://i.ibb.co/4JYMnmt/r-7.jpg"
                alt=""
              />
            </div>
            <h2 className="text-xl text-center  mt-3">Robert Miller</h2>
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
            <p className="text-center">
              We could not have asked for a better retirement party. The team
              truly captured the essence of our colleagues career. It was a
              heartwarming event filled with laughter and reminiscence.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="w-1/3">
          <div
            className="border-2 px-14 py-4 text-pink-100  bg-purple-500 rounded-lg text-"
            data-aos="fade-right"
          >
            <div className="flex justify-center">
              <img
                className="w-14 h-14 rounded-full"
                src="https://i.ibb.co/yBxznkr/r-8.jpg"
                alt=""
              />
            </div>
            <h2 className="text-xl text-center  mt-3">William Brown</h2>
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
            <p className="text-center">
              Our baby shower was an absolute delight, thanks to their
              thoughtful planning. The theme was adorable, and the arrangements
              were impeccable. We felt so cherished and loved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
