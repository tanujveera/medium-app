import React from "react";
import StoryTextEditor from "./StoryTextEditor";
import StoryHeader from "./StoryHeader";
import TipTapEditor from "./TipTapEditor";

const TextEditorPage = () => {
  return (
    <div>
      <StoryHeader/>
      <div className="pt-8 flex flex-col items-center mx-auto">
        <p className="text-2xl font-bold font-sans">Write your thoughts.</p>
        {/* <TipTapEditor /> */}
        <StoryTextEditor/>
      </div>
      <div className="flex flex-col items-end mr-5 mb-5">
        <button className="text-white bg-black px-4 py-1 rounded-full text-3xl font-extrabold font-serif">
          AI
        </button>
      </div>
    </div>
  );
};

export default TextEditorPage;
