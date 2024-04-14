import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-[1170px] mx-auto my-20 px-3 lg:px-0">
      <div className="max-w-[700px] mx-auto text-center">
        <h2 className="font-roboto text-xl lg:text-3xl font-bold mb-5">
          Choose Your Dream Property
        </h2>
        <p className="font-poppins text-lg mb-5">
          Choosing property from E-State ensures sustainable, cutting-edge
          design in prime locations, backed by trusted expertise and a
          commitment to quality.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product, idx) => (
          <SingleProduct key={idx} product={product}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default Products;
