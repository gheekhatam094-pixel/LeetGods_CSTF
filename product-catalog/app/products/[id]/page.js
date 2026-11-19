import Link from "next/link";
import products from "../../../data/products.json";

// [id] folder -> params.id gives the product id from the URL
export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Link href="/" className="text-emerald-700 text-sm">
        &larr; Back to catalog
      </Link>

      <div className="bg-white rounded-lg shadow-md mt-4 p-6 grid md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 h-64 rounded flex items-center justify-center text-9xl">
          {product.image}
        </div>

        <div>
          <p className="text-sm text-slate-500">{product.category}</p>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {product.name}
          </h2>
          <p className="text-emerald-700 text-2xl font-bold mb-4">
            ₹{product.price}
          </p>
          <p className="mb-4">{product.description}</p>

          <ul className="text-sm space-y-1">
            <li>Brand: {product.brand}</li>
            <li>Rating: {product.rating} / 5</li>
            <li>In stock: {product.stock}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
