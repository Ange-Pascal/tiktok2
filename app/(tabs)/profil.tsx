import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../providers/AuthProvider";

export default function Profil() {
  const { user, signOut } = useAuth();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold">{user?.username}</Text>
      <TouchableOpacity
        onPress={signOut}
       className="bg-black px-4 py-2 rounded-lg"
      >
       <Text  className="text-white font-bold text-3xl"> Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}
