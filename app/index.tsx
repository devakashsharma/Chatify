import { Link } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <Text>Hello</Text>
      <Link href={"/login"}>
      <TouchableOpacity>
        <Text>Click Here</Text>
      </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
};

export default Home;