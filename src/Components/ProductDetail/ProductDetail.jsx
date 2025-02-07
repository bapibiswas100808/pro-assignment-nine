import { useLoaderData, useParams } from "react-router-dom";
import "animate.css";
import { Helmet } from "react-helmet-async";

const ProductDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const requiredData = data.find(
    (product) => parseInt(product.id) === parseInt(id)
  );
  return (
    <div className="max-w-[1170px] mx-auto">
      <Helmet>
        <title>{requiredData.estate_title}|details</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 space-y-4 animate__animated animate__fadeInLeft">
            <img src={requiredData.image} className=" rounded-lg shadow-2xl" />
          </div>
          <div className="flex-1 animate__animated animate__fadeInRight">
            <h1 className="text-2xl lg:text-5xl font-bold font-roboto">
              {requiredData.estate_title}
            </h1>
            <h3 className="font-semibold text-xl lg:text-2xl font-poppins mt-3">
              Type:{requiredData.segment_name}
            </h3>
            <p className="py-6 font-poppins">{requiredData.description}</p>
            <p className="font-poppins">
              <span className="font-semibold">Price:</span> {requiredData.price}
            </p>
            <p className="font-poppins">
              <span className="font-semibold">Status:</span>{" "}
              {requiredData.Status}
            </p>
            <p className="font-poppins">
              <span className="font-semibold">Area:</span> {requiredData.Area}
            </p>
            <p className="font-poppins">
              <span className="font-semibold">Location:</span> mb-5
              {requiredData.location}
            </p>
            <div className="flex gap-5 mt-5">
              <p className="font-poppins bg-gray-300 rounded-lg px-2">
                {requiredData.facilities[0]}
              </p>
              <p className="font-poppins bg-gray-300 rounded-lg px-2">
                {requiredData.facilities[1]}
              </p>
              <p className="font-poppins bg-gray-300 rounded-lg px-2">
                {requiredData.facilities[2]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
