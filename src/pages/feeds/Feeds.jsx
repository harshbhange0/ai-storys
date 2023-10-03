import React, { useState, useEffect } from "react";
import { getStories } from "../../assets/Data.js";
import FeedItem from "../../components/FeedItem.jsx";
import Nav from "../../components/Nav.jsx";

function Feeds() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function fetchStories() {
      try {
        const data = await getStories();
        setStories(data);
      } catch (error) {
        console.error("Error fetching stories:", error);
      }
    }

    fetchStories();
  }, []);

  return (
    <>
      <header className="sticky top-0 ">
        <Nav user={stories[0]?.author} />
      </header>
      <div className="flex-col justify-center px-2 sm:p-3 md:px-4 ">
        <div className="grid w-full grid-cols-4 ">
          <div className="hidden sm:col-span-1 sm:block">helo</div>
          <div className=" col-span-4 sm:col-span-3">
            <div className="mx-auto w-full max-w-[500px]">
              <div className="mt-10 flex w-full flex-col items-center justify-center gap-4">
                {stories.map((data, i) => {
                  return <FeedItem data={data} key={i} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feeds;
