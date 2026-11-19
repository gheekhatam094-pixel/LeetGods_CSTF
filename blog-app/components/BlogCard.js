import Link from "next/link";

// Reusable component: blog details come through props
export default function BlogCard({ id, title, author, description }) {
  return (
    <article className="py-6 border-b border-stone-200">
      <h2 className="text-xl font-semibold text-stone-800">
        <Link href={"/blog/" + id} className="hover:text-amber-700">
          {title}
        </Link>
      </h2>
      <p className="text-sm text-stone-400 mt-1">{author}</p>
      <p className="mt-2">{description}</p>
    </article>
  );
}
