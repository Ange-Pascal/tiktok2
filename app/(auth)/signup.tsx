import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { supabase } from "../../utils/supabase";
import { useAuth } from "../../providers/AuthProvider";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); 

  const {signUp} = useAuth();

  // const handleSignup = async () => {
  //   console.log(email, password);
  //   const { data, error } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //   });
  //   if (error) return console.error(error); 
  //   const {error: usererror} = await supabase.from('User').insert({
  //       id: data.user?.id, 
  //       username: username, 
  //       email: email
  //   })
  //   router.back();
  //   router.push("/(tabs)");
  // };
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="w-full p-4">
        <Text className="text-black font-bold text-center mb-4 text-3xl">
          Créer un compte
        </Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="bg-white p-4 rounded-lg border border-gray-300 w-full mb-4"
        />
        <TextInput
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
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
          onPress={()=> signUp(username, email, password)}
          className="bg-black p-4 rounded-lg "
        >
          <Text className="text-white font-bold text-lg text-center">
            Créer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(auth)")}
          className="b p-4 rounded-lg "
        >
          <Text className="text-black font-bold text-lg text-center">
            Se connecter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
