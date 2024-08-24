import { Tabs } from "expo-router";
import { icons } from "../../constants";
import { Image, Text, View } from "react-native";

const TabIcon = ({ color, focused, icon, name }) => {
  return (
    <View className="justify-center items-center gap-2">
      <Image source={icon} alt={name} resizeMode="contain" tintColor={color} className="w-6 h-6" />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            height: 84,
            borderTopWidth: 1,
            borderTopColor: "#232533",
            backgroundColor: "#161622",
          },
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => <TabIcon name="Home" color={color} focused={focused} icon={icons.home} />,
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            tabBarIcon: ({ color, focused }) => <TabIcon name="Bookmark" color={color} focused={focused} icon={icons.bookmark} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color, focused }) => <TabIcon name="Profile" color={color} focused={focused} icon={icons.profile} />,
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            tabBarIcon: ({ color, focused }) => <TabIcon name="Create" color={color} focused={focused} icon={icons.plus} />,
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
