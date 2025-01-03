import { Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-2xl font-bold text-red-700 ">
        Hello, NativeWind!
      </Text>
      <Text className="text-lg text-gray-900 mt-2">
        Ceci est un test des classes TailwindCSS.
      </Text>
     
    </View>
  );
}

