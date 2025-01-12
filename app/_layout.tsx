import { Stack} from "expo-router"; 
import { Slot } from "expo-router";
// Import your global CSS file
import "../global.css";
import { AuthProvider } from "../providers/AuthProvider";



export default function AppLayout (){
    return (
         <AuthProvider>
            <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }}/> 
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/> 
        </Stack>
         </AuthProvider>
    )
}