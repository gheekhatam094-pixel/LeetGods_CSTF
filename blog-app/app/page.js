import BlogCard from "../components/BlogCard";
import posts from "../data/posts.json";

export default function Home() {
  return (
    <div>
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          description={post.description}
        />
      ))}
    </div>
  );
}
