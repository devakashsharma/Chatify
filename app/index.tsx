import { Link } from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const App: React.FC = () => {
  return (
    <View className="w-full h-full flex flex-col justify-center items-center">
      <Text className="font-bold text-black text-3xl text-center">Chat App Coming Soon!</Text>
      <Link href="/login" className="text-center px-6 py-3 bg-black text-white rounded-xl">Login</Link>
    </View>
  );
};
export default App;
