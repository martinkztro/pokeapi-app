import { StatusBar, ScrollView, View, SafeAreaView } from "react-native";
import { Header } from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Generation from "./components/Generation";
import MainStack from "./MainStack";

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
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}
