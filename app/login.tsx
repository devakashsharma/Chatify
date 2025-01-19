import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { Link } from "expo-router";

export default function Login() {
  return (
    <SafeAreaView className="bg-[#7B2CBF] h-full">
      <ScrollView contentContainerClassName="flex-grow">
        <View className="relative h-full">
          {/* Background Image */}
          <Image
            source={images.login_white}
            className="absolute top-0 left-0 w-[90%] h-[90%] object-cover"
            resizeMode="cover"
          />
          <Image
            source={images.login_purple}
            className="absolute -z-10 top-0 right-0 w-[90%] h-[93%] object-cover"
            resizeMode="cover"
          />
          {/* Login Content */}
          <View className="absolute top-0 w-[80%] mx-9 h-full items-start justify-center">
            <Text className="text-4xl font-rubik-bold text-[#3C096C]">
              Login
            </Text>
            <View className="mt-4 w-4/5">
              <TextInput
                className="border border-gray-300 rounded-lg p-4 mb-4 bg-white font-rubik"
                placeholder="E-mail"
                keyboardType="email-address"
              />
              <TextInput
                className="border border-gray-300 rounded-lg p-4 mb-4 bg-white font-rubik"
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <Link href={"/"}>
            <TouchableOpacity className="bg-[#3C096C] py-3 px-14 rounded-lg">
              <Text className="text-white text-center text-lg font-rubik">
                Login
              </Text>
            </TouchableOpacity>
            </Link>
            {/* Adjusted Forget Password Section */}
            <View className="mt-4 flex flex-col justify-start items-start">
              <TouchableOpacity>
                <Text className="text-black-200 font-rubik">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
              <Text className="text-black-200 mt-2 font-rubik-semibold">
              {"               "} OR
              </Text>
              <View className="flex-row items-center">
                <Text className="text-black-200 font-rubik">
                  Don't have an account?{" "}
                </Text>
                <TouchableOpacity>
                  <Text className="text-[#3C096C] font-rubik-bold">
                    Sign up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
