import LottieView from "lottie-react-native";
import { View } from "react-native";

const Loading = () => {
  return (
    <View style={{ height: size, aspectRatio: 1 }}>
      <LottieView
        style={{ flex: 1 }}
        source={require("../assets/images/loading.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;
