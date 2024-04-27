import { TouchableOpacity, Image, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const ChatItem = ({ item, router, noBorder }) => {
  return (
    <TouchableOpacity
      className={`flex-row justify-between mx-4 items-center gap-3 mb-4 pb-2 ${
        noBorder ? "" : "border-b border-neutral-200"
      }`}
    >
      <Image
        source={require("../assets/images/avatar.png")}
        style={{ height: hp(6), width: hp(6) }}
        className="rounded-full"
      />

      {/* Name, Time, and Last Message */}
      <View className="flex-1 gap-1">
        {/* Name and Time */}
        <View className="flex-row justify-between">
          <Text
            style={{ fontSize: hp(1.8) }}
            className="font-semibold text-neutral-800"
          >
            Parhan
          </Text>
          <Text
            style={{ fontSize: hp(1.6) }}
            className="font-medium text-neutral-500"
          >
            Time
          </Text>
        </View>

        {/* Last Message */}
        <Text
          style={{ fontSize: hp(1.6) }}
          className="font-medium text-neutral-500"
        >
          Last Message
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
