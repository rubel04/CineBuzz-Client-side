import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  useEffect(() => {
    AOS.init;
  });
  return (
    <div data-aos="zoom-in-">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner3.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between items-center p-12 md:p-32  inset-0 bg-black/20">
              <div className="space-y-2 md:space-y-10">
                {/* <h1 className="text-2xl md:text-8xl font-bold text-white">
                  Love <br /> Nightmare
                /h1> */}
                <h1 className="text-xl md:text-5xl lg:text-8xl font-medium md:font-bold text-white">
                  <Typewriter
                    words={["Love Nightmare"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>

                <p className="text-white text-sm md:text-xl">
                  Written and Directed by Aleesha Rose / ireland 2025
                </p>
                <button className="rounded-full px-6 md:px-12 py-2 md:py-1 cursor-pointer text-sm md:text-normal font-medium bg-[#d96c2c] text-white">
                  Get Movie
                </button>
              </div>
              <div className="hidden md:block">
                <p className="text-base font-medium text-white">In Theater</p>
                <h4 className="text-2xl font-bold text-white">March 2025</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner-07.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between items-center p-12 md:p-32  inset-0 bg-black/20">
              <div className="space-y-2 md:space-y-4 lg:space-y-10">
                <h1 className="text-xl md:text-5xl lg:text-8xl font-medium md:font-bold text-white">
                  <Typewriter
                    words={["Alias Keep Walking"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <p className="text-white text-sm md:text-xl">
                  Written and Directed by Jue Alissa / United States 2022
                </p>
                <button className="rounded-full px-6 md:px-12 py-2 md:py-1 cursor-pointer text-sm md:text-normal font-medium bg-[#d96c2c] text-white">
                  Get Movie
                </button>
              </div>
              <div className="hidden md:block">
                <p className="text-base font-medium text-white">In Theater</p>
                <h4 className="text-2xl font-bold text-white">April 2025</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner-06.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between items-center p-12 md:p-32  inset-0 bg-black/20">
              <div className="space-y-2 md:space-y-4 lg:space-y-10">
                <h1 className="text-xl md:text-5xl lg:text-8xl font-medium md:font-bold text-white">
                  <Typewriter
                    words={["The Way of Water"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <p className="text-white text-sm md:text-xl">
                  Written and Directed by James / United Kigndom 2024
                </p>
                <button className="rounded-full px-6 md:px-12 py-2 md:py-1 cursor-pointer text-sm md:text-normal font-medium bg-[#d96c2c] text-white">
                  Get Movie
                </button>
              </div>
              <div className="hidden md:block">
                <p className="text-base font-medium text-white">In Theater</p>
                <h4 className="text-2xl font-bold text-white">June 2025</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner-05.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between items-center p-12 md:p-32  inset-0 bg-black/20">
              <div className="space-y-2 md:space-y-4 lg:space-y-10">
                <h1 className="text-xl md:text-5xl lg:text-8xl font-medium md:font-bold text-white">
                  <Typewriter
                    words={["The Seventh Day"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <p className="text-white text-sm md:text-xl">
                  Written and Directed by Dev Rubel / Australia 2023
                </p>
                <button className="rounded-full px-6 md:px-12 py-2 md:py-1 cursor-pointer text-sm md:text-normal font-medium bg-[#d96c2c] text-white">
                  Get Movie
                </button>
              </div>
              <div className="hidden md:block">
                <p className="text-base font-medium text-white">In Theater</p>
                <h4 className="text-2xl font-bold text-white">July 2025</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/banner-04.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between items-center p-12 md:p-32  inset-0 bg-black/20">
              <div className="space-y-2 md:space-y-4 lg:space-y-10">
                <h1 className="text-xl md:text-5xl lg:text-8xl font-medium md:font-bold text-white">
                  <Typewriter
                    words={["Behind The Mask"]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
                <p className="text-white text-sm md:text-xl">
                  Written and Directed by Kenvin Lord / ireland 2022
                </p>
                <button className="rounded-full px-6 md:px-12 py-2 md:py-1 cursor-pointer text-sm md:text-normal font-medium bg-[#d96c2c] text-white">
                  Get Movie
                </button>
              </div>
              <div className="hidden md:block">
                <p className="text-base font-medium text-white">In Theater</p>
                <h4 className="text-2xl font-bold text-white">December 2025</h4>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
