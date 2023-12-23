import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const opciones = ["Pomodores", "Short Break", "Long Break"];

export default function Header({currentTime,setCurrentTime}) {
  return (
    <View style={{display:'flex',flexDirection:'row'}}>
      {opciones.map((item, index) => {
        <TouchableOpacity key={index} style={styles.itemStyle}>
          <Text>{item}</Text>
        </TouchableOpacity>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    width: "33%",
    borderWidth: 3,
    padding: 5,
  },
});
