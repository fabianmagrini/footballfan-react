import { feeds } from "./data";
import FeedList from "../components/FeedList";

export default function Feed() {
  return (
    <div className="container mx-auto">
      <div className="grid gap-4 grid-cols-3 grid-rows-3"> 
        {feeds.map((feed) => (
          <FeedList key={feed._id} feed={feed} />
        ))}
      </div> 
    </div> 
  );
}