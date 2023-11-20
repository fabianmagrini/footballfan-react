import { newPosts } from "./data";
import PostList from "../components/PostList";

export default function New() {
  return (
    <div className="container mx-auto">
      <div className="grid gap-4 grid-cols-3 grid-rows-3"> 
        {newPosts.map((post) => (
          <PostList key={post._id} post={post} />
        ))}
      </div> 
    </div> 
  );
}