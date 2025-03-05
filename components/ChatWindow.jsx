"use client";
import { useState } from "react";

const ChatWindow = ({ selectedUser, messages, sendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  if (!selectedUser)
    return (
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-400 text-gray-800 text-lg font-semibold">
        Select a user to start chat
      </div>
    );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      sendMessage(selectedUser.id, newMessage);
      setNewMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen p-4 bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Chat Header */}
      <h2 className="text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg shadow-md text-center">
        Chat with {selectedUser.name}
      </h2>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-white rounded-lg shadow-inner mt-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 my-1 text-lg rounded-xl w-max max-w-[80%] ${
              msg.sender === "me"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="flex items-center p-3 bg-white rounded-lg shadow-md border mt-2">
        <input
          type="text"
          className="flex-1 p-3 border rounded-lg outline-none text-lg text-gray-700 bg-gray-100"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown} // ✅ Sends message when Enter is pressed
        />
        <button
          onClick={handleSendMessage}
          className="ml-3 px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-bold rounded-lg shadow-md hover:opacity-90 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
