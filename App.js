import { StatusBar, ScrollView, View, SafeAreaView } from "react-native";
import { Header } from "./components/Header";
import { Home } from "./screens/Home";

export default function App() {

    return (
      <SafeAreaView>
        <ScrollView>

          <Header />
          <Home />

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
}

