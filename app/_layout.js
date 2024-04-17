import { View } from "react-native";
import { Slot } from "expo-router";
import "../global.css";

const _layout = () => {
  return (
    <View>
      <Slot />
    </View>
  );
};

export default _layout;
