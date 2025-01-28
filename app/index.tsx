import { Link } from "expo-router";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";
import ChatIndex from "./chats";
import ChatList from "./chats/chatlist";

const Home = () => {
  const folderNames = ["All", "Group", "Unread", "Archived"]; // Fixed typo in "Archived"

  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView>
        {/* Header Section */}
        <View className="pt-8 bg-[#673AB7]">
          {/* Upper Navigation */}
          <View className="flex-row items-center justify-between pb-4">
            {/* Profile Section */}
            <View className="flex-row items-center px-6 gap-4">
              {/* Profile Image */}
              <View className="w-[72px] h-[72px] rounded-full bg-white" />
              {/* Name and Status */}
              <View>
                <Text
                  className="text-xl font-bold text-white"
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{ maxWidth: 150 }}
                >
                  Akash Sharma
                </Text>
                <Text className="text-base text-white">At work</Text>
              </View>
            </View>

            {/* Actions Section */}
            <View className="flex-row items-center gap-4">
              <TouchableOpacity>
                <Image source={icons.search} className="w-7 h-7" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={icons.three_dots} className="w-7 h-7" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Title Section */}
          <View className="flex-row items-center px-6 pb-6 gap-4 mt-6">
            <Text className="text-5xl font-bold text-white">Chat</Text>
            <View className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
              <Text className="text-2xl font-bold text-gray-500">21</Text>
            </View>
          </View>

          {/* Folder Navigation */}
          <View className="bg-white rounded-t-[28px] mt-3 px-4 py-6">
            <View className="flex-row justify-around">
              {folderNames.map((name, index) => (
                <TouchableOpacity key={index}>
                  <Text
                    className={`text-xl font-rubik-medium ${
                      index === 0
                        ? "text-black font-rubik-bold"
                        : "text-gray-500"
                    }`}
                  >
                    {name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Conversation */}
        <View className="bg-gray-100 text-xs py-5 px-6 rounded-t-3xl">
          <Text className="text-gray-500">Conversation</Text>
        </View>

        {/* Chat List Section */}
        <View className="">
          <Text className="text-xl text-gray-700">Chat List Placeholder</Text>
          {/* <ChatIndex name="Akash" lastMessage="Hey There" time="3:12" avatar="" /> */}
          <ChatList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
