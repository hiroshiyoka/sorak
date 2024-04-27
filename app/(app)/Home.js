import ChatList from "@/components/ChatList";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Home = () => {
  const [users, setUsers] = useState([]);

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />

      {users.length > 0 ? (
        <ChatList users={users} />
      ) : (
        <View className="flex items-center" style={{ top: hp(30) }}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

export default Home;
