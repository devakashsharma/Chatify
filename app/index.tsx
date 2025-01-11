import React from "react";
import { Text, View, StyleSheet } from "react-native";

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat App Coming Soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default App;
