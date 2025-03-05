"use client";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";

export default function Home() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Pass setSelectedUser as onSelectUser */}
      <Sidebar onSelectUser={(user) => setSelectedUser(user)} activeUser={selectedUser} />
      <ChatWindow selectedUser={selectedUser} />
    </div>
  );
}
