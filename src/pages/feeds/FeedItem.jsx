import React from "react";
import Button from "../../components/Button";

function FeedItem({
  author,
  storyHeading,
  mainContent,
  like,
  onLike,
  onReadMore,
  onEdit,
}) {
  return (
    <div className=" flex w-full flex-col rounded-md bg-white/50 px-4 py-2">
      <span className="text-gray-400">Author: {author}</span>
      <div className="my-2 h-full overflow-hidden rounded-md bg-white/80 p-2 ps-5  text-sm">
        <h2 className="my-2 font-sans text-xl font-semibold">{storyHeading}</h2>
        <p className="line-clamp-5 px-2 font-sans capitalize tracking-wide sm:line-clamp-3 md:line-clamp-4 lg:line-clamp-6">
          {mainContent}
        </p>
        <Button
          className=" me-1 ms-auto block font-sans underline"
          onClick={onReadMore}
        >
          Read More
        </Button>{" "}
      </div>
      <div className="sm:text-md my-2 flex flex-row  items-center justify-between px-2 text-sm">
        <Button className=" rounded-md bg-white/50 px-2 py-1 " onClick={onLike}>
          {like} like
        </Button>

        <Button className=" rounded-md bg-white/50 px-2 py-1 " onClick={onEdit}>
          Edit this Post
        </Button>
      </div>
    </div>
  );
}

export default FeedItem;
