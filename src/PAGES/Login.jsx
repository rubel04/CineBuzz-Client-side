import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { useTheme } from "../Hooks/UseTheme";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const Login = () => {
  const { loginUser, loginUserWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { mode } = useTheme();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    loginUser(email, password)
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "You successfully login to CineBuzz!",
            icon: "success",
            draggable: true,
          });
          form.reset();
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((err) => {
        // console.log(err);
        Swal.fire({
          icon: "error",
          text: err.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    loginUserWithGoogle()
      .then((result) => {
        // console.log(result);
        if (result.user) {
          Swal.fire({
            title: "You successfully sign up to CineBuzz!",
            icon: "success",
            draggable: true,
          });
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((err) => {
        // console.log(err.message);
        Swal.fire({
          icon: "error",
          text: err.message,
        });
      });
  };

  return (
    <div
      data-aos="zoom-in"
      className={`${
        mode === "dark" && "text-black"
      } md:3/4 lg:w-2/5 mx-auto md:my-16 bg-gray-50 p-6 md:p-16 rounded`}
    >
      <h2 className="text-3xl font-medium text-center mb-4">
        Login to CineBuzz
      </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Email</label> <br />
          <input
            className="input w-full mt-1 rounded-full pl-4"
            type="text"
            placeholder="Your Email"
            name="email"
            required
          />
        </div>
        <div className="mt-4">
          <label htmlFor="">Password</label> <br />
          <input
            className="input w-full my-1 rounded-full pl-4"
            type="password"
            placeholder="Your Password"
            name="password"
            required
          />
        </div>
        <div>
          <a className="link underline">Forgot password?</a>
        </div>
        <button className="w-full mt-4 border rounded-full border-slate-300 px-3 py-2 cursor-pointer font-medium bg-[#d96c2c] text-white">
          Login
        </button>
        <p className="mt-4 text-center">
          Don't have an account? Please{" "}
          <Link
            className="text-[#d96c2c] font-bold hover:underline"
            to="/signup"
          >
            Sign Up
          </Link>
        </p>
      </form>
      <div className="flex items-center my-4">
        <hr className="text-slate-300 h-[2px] w-full" />
        <p className="text-center mx-2">Or</p>
        <hr className="text-slate-300 h-[2px] w-full" />
      </div>
      <div className="text-center">
        <button
          onClick={handleGoogleLogin}
          className="w-full border rounded-full border-slate-300 px-3 py-2 cursor-pointer font-medium hover:bg-[#d96c2c] hover:text-white transition duration-400"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
