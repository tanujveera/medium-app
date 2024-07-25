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
    </div>
  );
};

export default TextEditorPage;
