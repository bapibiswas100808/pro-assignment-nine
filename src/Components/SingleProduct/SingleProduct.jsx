import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SingleProduct = ({ product }) => {
  return (
    <div
      className="card border"
      data-aos="flip-right"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <figure>
        <img src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-poppins">
          {product.estate_title}
          <div className="badge badge-secondary">{product.segment_name}</div>
        </h2>
        <p className="font-poppins">{product.description}</p>
        <p className="text-xl font-semibold font-roboto">Facilities:</p>
        <div className="card-actions justify-center">
          <div className="badge badge-outline">{product.facilities[0]}</div>
          <div className="badge badge-outline">{product.facilities[1]}</div>
          <div className="badge badge-outline">{product.facilities[2]}</div>
        </div>
        <Link
          to={`/details/${product.id}`}
          className="btn bg-[#ff3e55] mt-4 text-white hover:bg-primary font-poppins"
        >
          View Property
        </Link>
      </div>
    </div>
  );
};
SingleProduct.propTypes = {
  product: PropTypes.object.isRequired,
};
export default SingleProduct;
