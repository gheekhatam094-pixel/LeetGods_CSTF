import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-xl font-semibold mb-2">Student not found</h2>
      <Link href="/" className="text-blue-600">
        Go back to list
      </Link>
    </div>
  );
}
