import { StatusBar } from "react-native";
import { Header } from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Generation from "./screens/Generation";
import Pokemon from "./screens/Pokemon";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <Header />
      <NavigationContainer backgroundColor="#fff">
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
          >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Generation" component={Generation} />
          <Stack.Screen name="Pokemon" component={Pokemon} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
