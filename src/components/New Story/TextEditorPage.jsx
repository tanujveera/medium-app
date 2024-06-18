import React from "react";
import StoryTextEditor from "./StoryTextEditor"

const TextEditorPage = () => {
  return (
    <div>
      <div className="pt-8 flex flex-col items-center mx-auto">
        <p className="text-2xl font-bold font-sans">Write your thoughts.</p>
        <StoryTextEditor />
      </div>
    </div>
  );
};

export default TextEditorPage;
