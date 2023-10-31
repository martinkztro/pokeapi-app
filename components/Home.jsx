import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useFetch } from "../hooks/useFetch";

export default function Home({ navigation }) {
  const { data } = useFetch("https://pokeapi.co/api/v2/generation/");

  return (
    <ScrollView>
      <Text style={Styles.title}>Selecciona una generación:</Text>
      <View style={Styles.generationContainer}>
        {data &&
          data.results.map((generation) => (
            <TouchableOpacity
              key={generation.url}
              onPress={() =>
                navigation.navigate("Generation", {
                    gen: generation.name,
                })
              }
            >
              <Text style={Styles.card}>{generation.name}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  title: {
    fontSize: 27,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 25,
    color: "#3b4cca",
    textTransform: "uppercase",
  },
  generationContainer: {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  card: {
    width: 180,
    height: 130,
    backgroundColor: "#cc0000",
    borderColor: "#3b4cca",
    borderWidth: 4,
    color: "#fbd743",
    textAlign: "center",
    borderRadius: 10,
    paddingTop: 50,
    fontSize: 23,
    fontWeight: "bold",
  },
});
