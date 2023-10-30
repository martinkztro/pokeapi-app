import { StatusBar } from "expo-status-bar";
import { Text, View, ActivityIndicator, StyleSheet, ScrollView } from "react-native";
import { fetchData } from "./fetchData";
import { Header } from "./components/Header";

const apiData = fetchData("https://pokeapi.co/api/v2/generation/");

export default function App() {
  
  const data = apiData.read();

    return (
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Header />
        <View style={styles.cardsContainer}>
          {
            data.results.map((item, index) => (
              <View key={index}>
                <Text style={styles.card}>{item.name}</Text>
              </View>
            ))
          }
        </View>
      <StatusBar style="auto" />
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  cardsContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: 10,
    rowGap: 5,
    marginBottom: 30
  },
  card: {
    backgroundColor: "orange",
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
    width: 180,
    height: 115,
    borderRadius: 10
  },
});
