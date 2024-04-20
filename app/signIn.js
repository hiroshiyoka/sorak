import { StatusBar } from "expo-status-bar";
import { View, Image } from "react-native";

const signIn = () => {
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View className="flex-1 gap-12">
        <View className="items-center">
          <Image source={require("../assets/images/login.png")} />
        </View>
      </View>
    </View>
  );
};

export default signIn;
