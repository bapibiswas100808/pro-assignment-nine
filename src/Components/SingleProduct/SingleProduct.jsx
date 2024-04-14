import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  return (
    <div className="card border">
      <figure>
        <img src={product.image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product.estate_title}
          <div className="badge badge-secondary">{product.segment_name}</div>
        </h2>
        <p>{product.description}</p>
        <p>Facilities:</p>
        <div className="card-actions justify-center">
          <div className="badge badge-outline">{product.facilities[0]}</div>
          <div className="badge badge-outline">{product.facilities[1]}</div>
          <div className="badge badge-outline">{product.facilities[2]}</div>
        </div>
        <Link
          to={`/details/${product.id}`}
          className="btn bg-[#ff3e55] mt-4 text-white hover:bg-primary"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
