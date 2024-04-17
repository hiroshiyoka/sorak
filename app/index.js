import { View, ActivityIndicator } from "react-native";

const StartPage = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" color="gray" />
    </View>
  );
};

export default StartPage;
