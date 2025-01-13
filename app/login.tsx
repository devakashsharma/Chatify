import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const LoginScreen: React.FC = () => {
  const router = useRouter();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 px-4">
      <Text className="text-3xl font-bold mb-4">Login</Text>
      <TextInput
        className="w-full border border-gray-300 p-4 mb-4 rounded-lg"
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        className="w-full border border-gray-300 p-4 mb-4 rounded-lg"
        placeholder="Password"
        secureTextEntry
      />
      <TouchableOpacity
        className="bg-black px-4 py-2 rounded-lg"
        onPress={() => router.push("/chatlist")}
      >
        <Text className="text-white text-xl text-center">Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
