import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const requiredData = data.find(
    (product) => parseInt(product.id) === parseInt(id)
  );
  return (
    <div className="max-w-[1170px] mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 space-y-4">
            <img src={requiredData.image} className=" rounded-lg shadow-2xl" />
          </div>
          <div className="flex-1">
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
