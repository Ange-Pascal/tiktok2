import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Accueil",
          tabBarIcon: ({focused}) => (
            <Ionicons name={focused? "home-sharp":"home-outline"} size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: "Amie(s)",
          tabBarIcon: ({focused}) => (
            <Ionicons name={focused?"people-sharp":"people-outline"} size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="add-video"
        options={{
          title: "",
          tabBarIcon: () => (
            <View className="absolute">
              <Ionicons name="add-circle" size={65} color="black" className="w-20" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Boite de reception",
          tabBarIcon: ({focused}) => (
            <Ionicons name={focused? "chatbox-ellipses-sharp":"chatbox-ellipses-outline"} size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: "Profil",
          tabBarIcon: ({focused}) => <Ionicons name={focused? "person-sharp":"person-outline"} size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
