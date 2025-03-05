"use client";
import { useState } from "react";

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="p-4 flex bg-white border-t">
      <input
        type="text"
        className="flex-1 p-2 border rounded-lg"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="ml-2 p-2 bg-blue-500 text-white rounded-lg" onClick={handleSend}>
        Send
      </button>
    </div>
  );
}
