import Link from "next/link";

// Reusable component: receives student data through props
export default function StudentCard({ id, name, rollNo, department, image }) {
  return (
    <div className="bg-white border rounded p-4 text-center shadow-sm">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-3"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm">Roll No: {rollNo}</p>
      <p className="text-sm mb-3">{department}</p>
      <Link
        href={`/students/${id}`}
        className="inline-block bg-blue-600 text-white text-sm px-3 py-1 rounded"
      >
        View Details
      </Link>
    </div>
  );
}
