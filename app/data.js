export const chats = [
    {
      id: 1,
      name: "John Doe",
      lastMessage: "Hey! How are you?",
    },
    {
      id: 2,
      name: "Alice",
      lastMessage: "Let's meet tomorrow!",
    },
  ];
  
  export const messages = {
    1: [
      { sender: "John Doe", text: "Hey! How are you?", isMe: false },
      { sender: "Me", text: "I'm good! What about you?", isMe: true },
    ],
    2: [
      { sender: "Alice", text: "Let's meet tomorrow!", isMe: false },
      { sender: "Me", text: "Sure! What time?", isMe: true },
    ],
  };
  