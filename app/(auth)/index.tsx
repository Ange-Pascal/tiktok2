import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
// import { supabase } from "../../utils/supabase";
import { useAuth } from "../../providers/AuthProvider";

export default function Auth() {
  const router = useRouter(); 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  const {signIn} = useAuth()

  // const handleLogin = async () =>{
  //   console.log(email, password) 
  //   const {data, error} = await supabase.auth.signInWithPassword({
  //     email: email, 
  //     password: password
  //   })
  //   if(error) return console.log(error)
  //     router.push('/(tabs)')
  // }
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-full p-4">
        <Text className="text-black font-bold text-center mb-4 text-3xl">
          Se Connecter
        </Text>
        <TextInput 
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="bg-white p-4 rounded-lg border border-gray-300 w-full mb-4"
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Mot de passe"
          value={password}
          onChangeText={setPassword}
          className="bg-white p-4 rounded-lg border border-gray-300 w-full mb-4"
        />
        <TouchableOpacity
          onPress={()=>signIn(email, password)}
          className="bg-black p-4 rounded-lg "
        >
          <Text className="text-white font-bold text-lg text-center">
            Connexion
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/signup")}
          className="b p-4 rounded-lg "
        >
          <Text className="text-black font-bold text-lg text-center">
            Créer un compte
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
