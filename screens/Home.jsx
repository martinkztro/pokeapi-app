import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useFetch } from "../hooks/useFetch";

export default function Home({ navigation }) {
  const { data } = useFetch("https://pokeapi.co/api/v2/generation/");

  return (
    <ScrollView style={Styles.container}>
      <View style={Styles.generationContainer}>
        {data &&
          data.results.map((generation) => (
            <TouchableOpacity
              key={generation.url}
              style={Styles.card}
              onPress={() =>
                navigation.navigate("Generation", {
                    gen: generation.name,
                })
              }
            >
              <Text style={Styles.cardTitle}>{generation.name.replace(/tion-/,'ción')}</Text>
              {
                generation.name === "generation-i" ? <Text style={Styles.cardSubtitle}>1ra Generación</Text> :
                generation.name === "generation-ii" ? <Text style={Styles.cardSubtitle}>2da Generación</Text> :
                generation.name === "generation-iii" ? <Text style={Styles.cardSubtitle}>3ra Generación</Text> :
                generation.name === "generation-iv" ? <Text style={Styles.cardSubtitle}>4ta Generación</Text> :
                generation.name === "generation-v" ? <Text style={Styles.cardSubtitle}>5ta Generación</Text> :
                generation.name === "generation-vi" ? <Text style={Styles.cardSubtitle}>6ta Generación</Text> :
                generation.name === "generation-vii" ? <Text style={Styles.cardSubtitle}>7ma Generación</Text> :
                generation.name === "generation-viii" ? <Text style={Styles.cardSubtitle}>8va Generación</Text> :
                generation.name === "generation-ix" ? <Text style={Styles.cardSubtitle}>9na Generación</Text> :
                <Text style={Styles.cardSubtitle}>Generación desconocida</Text>
              }
              <Text style={Styles.cardSubtitle}></Text>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#22303c",
  },
  title: {
    fontSize: 35,
    fontWeight: "900",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    textTransform: "uppercase",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "normal",
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },
  generationContainer: {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
    marginTop: 30,
  },
  card: {
    width: 180,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#192734",
    borderColor: "gray",
    shadowColor: "red",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: .5,
    color: "white",
    textAlign: "center",
    borderRadius: 10,
    padding: 12,
    paddingTop: 5,
  },
  cardTitle: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "300",
    textAlign: "center",
    color: "#d4d4d4",
    textTransform: "uppercase",
  },
  cardSubtitle: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: "normal",
    color: "gray",
    textAlign: "right",
  },
});
