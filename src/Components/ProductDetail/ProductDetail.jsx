import { useLoaderData, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const requiredData = data.find(
    (product) => parseInt(product.id) === parseInt(id)
  );
  return (
    <div>
      <h2>{requiredData.price}</h2>
    </div>
  );
};

export default ProductDetail;
