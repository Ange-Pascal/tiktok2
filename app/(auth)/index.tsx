import { Link, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Auth() {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={() => router.push("/(tabs)")}
        className="bg-black p-4 rounded-lg "
      >
        <Text className="text-white font-bold text-lg">Connexion</Text>
      </TouchableOpacity>
    </View>
  );
}
