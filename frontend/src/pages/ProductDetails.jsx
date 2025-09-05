import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10 flex flex-col md:flex-row gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full md:w-1/2 h-96 object-cover rounded"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-xl font-semibold">${product.price}</p>
        <button
          className="bg-secondary text-black px-6 py-3 rounded hover:bg-yellow-400"
          onClick={() => {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert("Added to Cart!");
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
