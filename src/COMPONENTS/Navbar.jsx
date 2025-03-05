import { useContext } from "react";
import { CgLogIn } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { RiMovieAiLine, RiMovieLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { BsFillBrightnessHighFill, BsMoonStarsFill } from "react-icons/bs";
import { useTheme } from "../Hooks/UseTheme";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const {changeTheme,mode} = useTheme();
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-1 text-[#d96c2c] underline"
            : "flex items-center gap-1"
        }
        to="/"
      >
        <IoHomeOutline />
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-1 text-[#d96c2c] underline"
            : "flex items-center gap-1"
        }
        to="/allMovies"
      >
        <RiMovieLine />
        All Movies
      </NavLink>
      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-1 text-[#d96c2c] underline"
              : "flex items-center gap-1"
          }
          to="/addMovies"
        >
          <RiMovieAiLine />
          Add Movies
        </NavLink>
      )}
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex items-center gap-1 text-[#d96c2c] underline"
            : "flex items-center gap-1"
        }
        to="/news"
      >
        <PiNewspaperClippingLight />
        News
      </NavLink>
      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex items-center gap-1 text-[#d96c2c] underline"
              : "flex items-center gap-1"
          }
          to="/myFavorites"
        >
          <MdFavoriteBorder />
          My Favorites
        </NavLink>
      )}
    </>
  );
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          title: "You successfully log out to CineBuzz!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((err) => {
        // console.log(err);
        Swal.fire({
          icon: "error",
          text: err.message,
        });
      });
  };
  return (
    <div className="md:w-11/12 mx-auto dark:bg-black">
      <div className="mt-2">
        <a className="text-3xl pl-3 text-[#d96c2c] italic font-medium">
          Cine<span className="text-black">Buzz</span>
        </a>
      </div>

      <div className="navbar pt-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-20 text-base font-medium">
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-end flex items-center gap-4">
          {/* {mode !== "dark" ? (
            
            <span
              onClick={changeTheme}
              className="text-4xl cursor-pointer"
            >
              <BsFillBrightnessHighFill />
            </span>
          ) : (
            <span
              onClick={changeTheme}
              className="text-4xl cursor-pointer"
            >
              <BsMoonStarsFill />
            </span>
          )} */}
          <button className="text-4xl cursor-pointer" onClick={changeTheme}>{
          mode === 'dark'? <BsFillBrightnessHighFill /> : <BsMoonStarsFill />
        }</button>
          {user ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                <img
                  className="h-12 w-12 rounded-full border border-[#d96c2c]"
                  src={user?.photoURL}
                  alt="Profile-picture"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 p-2 shadow-sm"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <button onClick={handleLogout}>Log Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              className="mt-4 border rounded-full flex items-center gap-2 border-slate-300 px-6 py-2 cursor-pointer font-medium bg-[#d96c2c] text-white"
              to="/login"
            >
              <CgLogIn />
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
