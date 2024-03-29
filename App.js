import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View, Platform } from "react-native";
import Header from "./src/components/Header";

export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: Platform.OS === "android" && 30 }}>
        <Text style={styles.text}>Pomodoro</Text>
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
