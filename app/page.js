"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({
    1: [{ text: "Hey A!", sender: "me" }],
    2: [{ text: "What's up B?", sender: "me" }],
    3: [{ text: "Hello C!", sender: "me" }],
  });

  const sendMessage = (userId, text) => {
    setMessages((prevMessages) => ({
      ...prevMessages,
      [userId]: [...(prevMessages[userId] || []), { text, sender: "me" }],
    }));
  };

  return (
    <div className="flex h-screen">
      {/* ✅ Pass messages to Sidebar */}
      <Sidebar 
        onSelectUser={setSelectedUser} 
        activeUser={selectedUser} 
        messages={messages} 
      />
      <ChatWindow selectedUser={selectedUser} messages={messages[selectedUser?.id] || []} sendMessage={sendMessage} />
    </div>
  );
}
