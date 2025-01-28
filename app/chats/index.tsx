import React from "react";
import { View, Text, Image } from "react-native";

interface ChatIndexProps {
  name: string;
  lastMessage: string;
  time: string;
  avatar?: string; // Make avatar optional
}

const ChatIndex: React.FC<ChatIndexProps> = ({
  name,
  lastMessage,
  time,
  avatar,
}) => {
  return (
    <View className="flex-row items-center p-4 bg-gray-100">
      {/* Avatar */}
      <View className="w-[62px] h-[62px] rounded-full overflow-hidden mr-4">
        {avatar ? (
          <Image source={{ uri: avatar }} className="w-full h-full" />
        ) : (
          <View className="w-full h-full bg-gray-300" />
        )}
      </View>

      {/* Chat Details */}
      {/* Time */}
      <View className="flex-1">
        <Text className="text-lg font-bold text-black">{name}</Text>
        <Text className="text-sm text-gray-600" numberOfLines={1}>
          {lastMessage}
        </Text>
      </View>

      <View>
        <Text className="text-xs text-gray-500">{time}</Text>
      </View>
    </View>
  );
};

export default ChatIndex;
