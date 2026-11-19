import Link from "next/link";

// Reusable component: product details come through props
export default function ProductCard({ id, name, image, price, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="bg-emerald-50 h-44 flex items-center justify-center text-7xl">
        {image}
      </div>

      <div className="p-4 flex flex-col flex-1">
        <h2 className="text-lg font-semibold text-slate-900">{name}</h2>
        <p className="text-sm text-slate-500 my-2 flex-1">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-emerald-700 font-bold text-lg">₹{price}</span>
          <Link
            href={"/products/" + id}
            className="border border-emerald-600 text-emerald-700 text-sm px-3 py-1 rounded hover:bg-emerald-600 hover:text-white"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
