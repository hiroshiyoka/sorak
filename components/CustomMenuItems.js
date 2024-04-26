import { Text, View } from "react-native";
import { MenuOption } from "react-native-popup-menu";

export const MenuItem = ({ text, action, value, icon }) => {
  return (
    <MenuOption onSelect={() => action(value)}>
      <View className="px-4 py-1 flex-row justify-between items-center">
        <Text>Icon</Text>
        <Text>Text</Text>
      </View>
    </MenuOption>
  );
};
