import React, { useEffect } from "react";
import Navbar from "../../components/Navbar";
import FeedItem from "./FeedItem";
import Box from "../../components/Box";
import Header from "../../components/Header";
import data from "./data.js";

function FeedsHome() {
  useEffect(() => {
    document.title = "AiStory.io | Home";
  });
  return (
    <Box>
      <div className=" sticky top-0 z-10 basis-full">
        <Header title="AiStory.io" />
      </div>
      <Box className="flex flex-col items-center justify-start sm:flex-row">
        <div className="fixed bottom-0 w-full sm:fixed sm:h-full sm:max-h-[90vh%] sm:min-h-[90vh]  sm:w-auto sm:pt-[4.5rem] ">
          <Navbar />
        </div>
        <div className="mx-auto  mb-28 mt-3 flex w-full flex-col gap-4 px-1 sm:mb-3 sm:max-w-[50vw] md:max-w-[40vw]">
          {data.map((item, i) => {
            return (
              <FeedItem
                key={i}
                storyHeading="Some Story Title"
                author={item.author}
                like={item.like}
                mainContent={item.mainContain}
              />
            );
          })}
        </div>
      </Box>
    </Box>
  );
}

export default FeedsHome;
