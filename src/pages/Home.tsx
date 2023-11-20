import { posts } from "./data";
import PostList from "../components/PostList";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center">Home page</h1>
      <div className="grid gap-4 grid-cols-3 grid-rows-3"> 
        {posts.map((post) => (
          <PostList key={post._id} post={post} />
        ))}
      </div> 
    </div> 
  );
}