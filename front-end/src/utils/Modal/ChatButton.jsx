import React, { useState } from 'react';
import ChatModal from './ChatModal'; // Import the modal component

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleModal} className="chat-button">
        Open Chat
      </button>
      {isOpen && <ChatModal isOpen={isOpen} toggleModal={toggleModal} />}
    </div>
  );
};

export default ChatButton;
