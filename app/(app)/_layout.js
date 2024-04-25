import HomeHeader from "@/components/HomeHeader";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="Home"
        options={{
          header: () => <HomeHeader />,
        }}
      />
    </Stack>
  );
};

export default Layout;
