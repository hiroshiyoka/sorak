import { View, Text, Platform } from "react-native";

const ios = Platform.OS == "ios";

const HomeHeader = () => {
  return (
    <View>
      <Text>HomeHeader</Text>
    </View>
  );
};

export default HomeHeader;
