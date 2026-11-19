import ProductCard from "../components/ProductCard";
import products from "../data/products.json";

export default function Home() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-900 mb-6">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
}
