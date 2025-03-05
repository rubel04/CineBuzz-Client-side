import { RotatingLines } from "react-loader-spinner";
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <RotatingLines
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default LoadingSpinner;
