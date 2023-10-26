import React from "react";
import Box from "../../components/Box";
import { useFirebase } from "../../context/UserContext";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Post from "./Post";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { useState } from "react";

function NewStoriesHome() {
  const { user } = useFirebase();
  const [text, setText] = useState("");
  const characterCount = text.length;
  const maxCharacters = 500;
  const handleTextChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxCharacters) {
      setText(newText);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Box>
      <div className=" sticky top-0 z-10 basis-full">
        <Header title="AiStory.io" />
      </div>
      <Box className="flex flex-col items-center justify-start sm:flex-row">
        <div className="fixed bottom-0 w-full sm:fixed sm:h-full sm:max-h-[90vh%] sm:min-h-[90vh]  sm:w-auto sm:pt-[4.5rem] ">
          <Navbar />
        </div>
        <div className="mx-auto  mb-28 mt-3 flex w-[80%] flex-col gap-4 px-1 sm:mb-3 sm:max-w-[50vw] md:max-w-[40vw]">
          <div className="flex flex-col">
            <h1 className="font-sans text-3xl text-gray-600">
              Post New Stories
            </h1>
            <form className="my-3" onSubmit={handleSubmit}>
              <Input
                label="Add A Title"
                className=" rounded-md border border-purple-300 p-1"
              />
              <div className="my-3">
                <label htmlFor="story">Add Prompt</label>
                <div>
                  <textarea
                    className="w-full rounded-md border border-purple-300 p-1 outline-none"
                    name=""
                    id="story"
                    rows="10"
                    required
                    onChange={handleTextChange}
                  ></textarea>
                  <p className="text-[12px] ">
                    {characterCount}/{maxCharacters}
                  </p>
                </div>
              </div>
              <div className="my-4 flex w-full items-center justify-center">
                <Button className="rounded-md bg-purple-200 px-3 py-2">
                  Generate Story
                </Button>
              </div>
            </form>

            {/* after getting res form gpt  <div>
              <Post />
            </div> */}
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default NewStoriesHome;
