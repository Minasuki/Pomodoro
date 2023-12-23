import { Text, TouchableOpacity, View } from "react-native";

const opciones = ["Pomodores", "Short Break", "Long Break"];

export default function Header({ time }) {
  return (
    <View>
        {opciones.map((item,index)=>{
            <TouchableOpacity key={index}>
                <Text>{item}</Text>
            </TouchableOpacity>
        })}
    </View>
  );
}
