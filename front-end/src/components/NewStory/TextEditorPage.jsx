import React, { useState } from "react";
import StoryTextEditor from "./StoryTextEditor";
import StoryHeader from "./StoryHeader";
import TipTapEditor from "./TipTapEditor";
import Modal from "../../utils/Modal/Modal";
import ChatButton from "../../utils/Modal/ChatButton";

const TextEditorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <StoryHeader/>
      <div>
        <div className="pt-8 flex flex-col items-center mx-auto">
          <p className="text-2xl font-bold font-sans">Write your thoughts.</p>
          {/* <TipTapEditor /> */}
          <StoryTextEditor/>
        </div>
        <ChatButton/>
      </div>
    </div>
  );
};

export default TextEditorPage;
