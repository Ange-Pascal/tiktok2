import { Stack} from "expo-router"; 
import { Slot } from "expo-router";
// Import your global CSS file
import "../global.css";



export default function AppLayout (){
    return (
         <Stack>
            <Stack.Screen name="(auth)" options={{ headerShown: false }}/> 
            <Stack.Screen name="(tabs)" options={{ headerShown: false }}/> 

        </Stack>
    )
}