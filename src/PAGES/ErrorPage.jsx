import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white text-center">
      <h1 className="text-8xl font-bold text-red-500">404</h1>
      <h2 className="text-4xl mt-4">Oops! Page Not Found</h2>
      <p className="text-lg mt-2 text-gray-400">
        Looks like you've entered the wrong scene. <br /> Let's get back to the main show!
      </p>
      {/* <div className="mt-6 flex items-center space-x-3">
        <img src="https://cdn-icons-png.flaticon.com/512/1179/1179237.png" alt="Movie Icon" className="w-16 h-16 bg-white" />
        <img src="https://cdn-icons-png.flaticon.com/512/846/846055.png" alt="Camera Icon" className="w-16 h-16 bg-white" />
      </div> */}
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 rounded text-lg font-semibold transition"
      >
        🎬 Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
