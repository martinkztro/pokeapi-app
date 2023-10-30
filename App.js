import { StatusBar, ScrollView, View, SafeAreaView } from "react-native";
import { Header } from "./components/Header";
import { Home } from "./screens/Home";
import { Generation } from "./screens/Generation";

export default function App() {

    return (
      <SafeAreaView>
        <ScrollView>

          <Header />
          <Generation />

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
}

