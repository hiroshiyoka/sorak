import { Octicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { View, Image, TextInput } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const signIn = () => {
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
        className="flex-1 gap-12"
      >
        {/* Sign In Image */}
        <View className="items-center">
          <Image
            style={{ height: hp(25) }}
            resizeMode="contain"
            source={require("../assets/images/login.png")}
          />
        </View>

        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold tracking-wider text-center text-neutral-800"
          >
            Sign In
          </Text>
          {/* Inputs */}
          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Octicons name="mail" size={hp(2.7)} color="gray" />
            <TextInput
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Email Address"
              placeholderTextColor={"gray"}
            />
          </View>

          <View
            style={{ height: hp(7) }}
            className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
          >
            <Octicons name="lock" size={hp(2.7)} color="gray" />
            <TextInput
              style={{ fontSize: hp(2) }}
              className="flex-1 font-semibold text-neutral-700"
              placeholder="Password"
              placeholderTextColor={"gray"}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default signIn;
