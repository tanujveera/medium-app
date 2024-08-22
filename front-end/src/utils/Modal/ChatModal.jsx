import React, { useState } from 'react';
import './ChatModal.css'; // Import CSS styles

const ChatModal = ({ isOpen, toggleModal }) => {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      // Call the API here and get the response
      const response = await fetch('API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      // Update the chat history
      setChatHistory([...chatHistory, { user: input, bot: data.response }]);
      setInput('');
    }
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button onClick={toggleModal} className="close-button">
          X
        </button>
        <div className="chat-history">
          {chatHistory.map((chat, index) => (
            <div key={index} className="chat-message">
              <p><strong>You:</strong> {chat.user}</p>
              <p><strong>Bot:</strong> {chat.bot}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={handleInputChange}
            className="chat-input"
            placeholder="Type your message..."
          />
          <button type="submit" className="send-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ChatModal;