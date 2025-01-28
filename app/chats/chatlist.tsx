import React from "react";
import { ScrollView } from "react-native";
import ChatIndex from "@/app/chats/index"

const ChatList = () => {
  const chats = [
    {
      id: 1,
      name: "Akash Sharma",
      lastMessage: "Hey! Are you free today?",
      time: "2:15 PM",
      avatar: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "John Doe",
      lastMessage: "Let's meet tomorrow.",
      time: "1:45 PM",
      avatar: "",
    },
    // Add more chat objects here...
  ];

  return (
    <ScrollView>
      {chats.map((chat) => (
        <ChatIndex
          key={chat.id}
          name={chat.name}
          lastMessage={chat.lastMessage}
          time={chat.time}
          avatar={chat.avatar}
        />
      ))}
    </ScrollView>
  );
};

export default ChatList;
