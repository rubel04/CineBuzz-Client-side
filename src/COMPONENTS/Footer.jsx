import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-black text-[#908d8d] p-10">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between items-cente mb-12">
          <a className="text-3xl pl-3 text-[#d96c2c] italic font-medium">
            Cine<span className="text-white">Buzz</span>
          </a>
          <div className="flex items-center gap-4 te">
            <p>Help / Privacy Policy</p>
            <div className="flex gap-3 text-2xl">
              <a
                href="https://www.facebook.com/rubelislam04"
                className="text-white text-base bg-gray-700 rounded-full p-4 hover:bg-[#d96c2c] transition-transform hover:-translate-y-4 duration-500 cursor-pointer"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/rubelislam04?igsh=NWE4cGpxdjc5NTVp"
                className="text-white text-base bg-gray-700 rounded-full p-4 hover:bg-[#d96c2c] transition-transform hover:-translate-y-4 duration-500 cursor-pointer"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://x.com/LearnerRubel?t=Z-_BSMIRJ-1s_oy5Gf7Fpw&s=09"
                className="text-white text-base bg-gray-700 rounded-full p-4 hover:bg-[#d96c2c] transition-transform hover:-translate-y-4 duration-500 cursor-pointer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/rubel-islam-bbb2a5317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-white text-base bg-gray-700 rounded-full p-4 hover:bg-[#d96c2c] transition-transform hover:-translate-y-4 duration-500 cursor-pointer"
              >
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
        </div>
        <footer className="footer sm:footer-horizontal text-base">
          <aside>
            <p className="text-xl text-white mb-2 font-bold">
              Get Movies Easily with <br /> Personalized Recommendations!
            </p>
            <button className="rounded-full px-12 py-3 cursor-pointer font-medium bg-[#d96c2c] text-white">
              Get Movie
            </button>
          </aside>
          <nav>
            <h6 className="text-xl font-bold text-[#d96c2c]">Movies</h6>
            <a className="link link-hover">Action</a>
            <a className="link link-hover">Adventure</a>
            <a className="link link-hover">Animation</a>
            <a className="link link-hover">Comedy</a>
            <a className="link link-hover">Crime</a>
          </nav>
          <nav>
            <h6 className="text-xl font-bold text-[#d96c2c]">My Account</h6>
            <a className="link link-hover">About</a>
            <a className="link link-hover">News</a>
            <a className="link link-hover">Latest News</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav>
            <h6 className="text-xl font-bold text-[#d96c2c]">Newsletter</h6>
            <p>
              Subscribe to CineBuzz newsletter <br /> this very day.
            </p>
            <div className="relative">
              <input
                className="border p-2 rounded bg-white"
                type="text"
                placeholder="Email Address"
              />
              <IoIosSend className="absolute right-2 top-2 text-xl text-black cursor-pointer" />
            </div>
          </nav>
        </footer>
        <p className="text-center mt-12">© Copyright 2025 by CineBuzz.com</p>
      </div>
    </div>
  );
};

export default Footer;
