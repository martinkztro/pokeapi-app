import { StatusBar } from "expo-status-bar";
import { Text, View, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import { fetchData } from "./fetchData";
import { Header } from "./components/Header";
import { Home } from "./screens/Home";
import { Generation } from "./screens/Generation";

export default function App() {

    return (
      <SafeAreaView>
        <ScrollView>

          <Header />
          <Home />
          <Generation />

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    );
}

