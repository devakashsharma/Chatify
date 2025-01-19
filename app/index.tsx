import { Link } from "expo-router";
import { Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "@/constants/icons";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-[#673AB7]">
      <ScrollView className="m-7">
        {/* <Text>Hello</Text>
        <Link href={"/login"}>
          <TouchableOpacity>
            <Text>Click Here</Text>
          </TouchableOpacity>
        </Link> */}

        {/* Nav of the app */}
        <View className="mt-7 flex flex-col">
          {/* Upper nav */}
          <View className="mb-3 flex flex-row items-center justify-between gap-6">
            {/* Left Section: Image and Name */}
            <View className="flex flex-row items-center gap-4 flex-shrink">
              {/* Profile Image */}
              <View className="w-[72px] h-[72px] rounded-full bg-white">
                {/* Placeholder for Image */}
              </View>
              {/* Name and Status */}
              <View className="flex flex-col flex-shrink">
                <Text
                  className="text-xl font-rubik-bold text-white"
                  numberOfLines={1} // Truncates to one line
                  ellipsizeMode="tail" // Adds "..." if text overflows
                  style={{ maxWidth: 150 }} // Limits width of name
                >
                  Akash Sharma
                </Text>
                <Text className="text-base text-white">At work</Text>
              </View>
            </View>

            {/* Right Section: Search and 3-Dot Icons */}
            <View className="flex flex-row items-center gap-4">
              {/* Search Icon */}
              <Image source={icons.search} className="w-7 h-7" />
              {/* 3-Dot Icon */}
              <Image source={icons.three_dots} className="" />
            </View>
          </View>

          <View className="mt-8 flex flex-row justify-start items-center gap-6 pr-5">
            <Text className="text-5xl font-rubik-bold text-white">Chat</Text>
            <View className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
              <Text className="font-rubik-bold text-gray-400 items-center text-2xl">
                21
              </Text>
            </View>
          </View>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
