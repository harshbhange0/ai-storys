import React from "react";
import { AiTwotoneLike, AiTwotoneDislike } from "react-icons/ai";

function FeedItem({ data }) {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-y-auto overflow-x-hidden rounded-sm border border-yellow-50/20 bg-purple-500/50  px-2 text-white shadow shadow-yellow-200/20  sm:px-3 md:px-4">
      <div className="h-full w-full space-y-2 py-2">
        <div className="flex flex-col justify-between  gap-2 sm:flex-row">
          <h1 className="text-xl">{data?.title}</h1>
          <span className="text-sm text-white/60">Author: {data?.author}</span>
        </div>
        <p className=" text-md space-y-2 border border-yellow-500/20 bg-purple-300/20 p-2">
          <span className=" line-clamp-3">{data?.story}</span>
          <button className="mx-auto text-sm text-blue-300 ">Read Full</button>
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex w-full items-center justify-around ">
            <button className="flex items-center gap-2 stroke-orange-200 p-2 text-xl hover:text-gray-300">
              <AiTwotoneLike className="" />
              <span className="text-sm">12</span>
            </button>
            <button className="flex items-center gap-2 stroke-orange-200 p-2 text-xl hover:text-gray-300">
              <AiTwotoneDislike className="" />
              <span className="text-sm">21</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedItem;
