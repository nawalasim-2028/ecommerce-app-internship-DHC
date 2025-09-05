import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <p>Product ID: {id}</p>
      <p>Here we will show product info from backend.</p>
    </div>
  );
}

export default ProductDetails;
