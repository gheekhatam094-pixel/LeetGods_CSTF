import Link from "next/link";
import posts from "../../../data/posts.json";

// [id] folder -> params.id gives the post id from the URL
export default function BlogDetails({ params }) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <div>
      <Link href="/" className="text-sm text-stone-400 hover:text-amber-700">
        &larr; Back
      </Link>

      <article className="mt-6">
        <h2 className="text-3xl font-semibold text-stone-800">{post.title}</h2>
        <p className="text-sm text-stone-400 mt-2 mb-6">
          {post.author} &middot; {post.date}
        </p>
        <p className="leading-7">{post.content}</p>
      </article>
    </div>
  );
}
