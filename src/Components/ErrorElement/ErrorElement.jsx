import { Link } from "react-router-dom";
import errorImage from "../../assets/images/error.jpg";
const ErrorElement = () => {
  return (
    <div className="max-width-[1170px] mx-auto">
      <div className="flex justify-center">
        <div>
          <img className="max-h-[400px]" src={errorImage} alt="" />
          <div className="text-center">
            <h2 className="text-3xl font-roboto font-bold mb-5">
              Page Not Found
            </h2>
            <Link
              className="bg-primary px-2 py-1 rounded-lg text-white font-poppins"
              to="/"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;
