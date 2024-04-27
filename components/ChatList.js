import { View, FlatList } from "react-native";

const ChatList = ({ users }) => {
  return (
    <View className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => Math.random()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ChatList;
