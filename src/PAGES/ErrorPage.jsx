import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
      <h1 className="text-8xl font-bold text-[#d96c2c]">404</h1>
      <h2 className="text-4xl mt-4">Oops! Page Not Found</h2>
      <p className="text-lg mt-2 text-gray-400">
        Looks like you've entered the wrong scene. <br /> Let's get back to the main show!
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-[#d96c2c] hover:bg-[#d96b2cde] rounded text-lg font-semibold transition"
      >
        🎬 Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
