import { View, FlatList } from "react-native";
import ChatItem from "./ChatItem";

const ChatList = ({ users }) => {
  return (
    <View className="flex-1">
      <FlatList
        data={users}
        contentContainerStyle={{ flex: 1, paddingVertical: 25 }}
        keyExtractor={(item) => Math.random()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => <ChatItem item={item} index={index} />}
      />
    </View>
  );
};

export default ChatList;
