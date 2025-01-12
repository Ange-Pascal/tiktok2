import { Text, View } from "react-native";  
import { useAuth } from "../../providers/AuthProvider";


export default function Page() { 
  const {user} = useAuth()
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-bold">Accueil</Text>
      <Text className="text-3xl font-bold">{JSON.stringify(user)}</Text>
    </View>
  );
}

