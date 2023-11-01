import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useFetch } from "../hooks/useFetch";

export default function Generation({ route, navigation }) {
  const { gen } = route.params;

  const { data } = useFetch(`https://pokeapi.co/api/v2/generation/${gen}`);

  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.title}>{gen.replace(/tion-/, 'ción ')}</Text>
      <Text style={Styles.subtitle}>Selecciona un pokémon:</Text>
      <View style={Styles.listContainer}>
        {data &&
          data.pokemon_species.map((pokemon, index) => (
            <TouchableOpacity style={Styles.card} key={index}
              onPress={() =>
                navigation.navigate("Pokemon", {
                  pokemon: pokemon.name,
                })
              }
            >
              <View style={Styles.cardInfo}>
                <Text style={Styles.cardTitle}>{pokemon.name}</Text>
                <Text style={Styles.cardSubtitle}>{pokemon.url}</Text>
              </View>
              <ImageBackground
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    index + 1
                  }.png`,
                }}
                style={{ width: 150, height: 100 }}
              />
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
        textTransform: "uppercase",
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 22,
        color: "white"
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "normal",
        color: "white",
        textAlign: "center",
        marginBottom: 20
    },
    listContainer: {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        gap: 12,
    },
    card: {
        width: 180,
        height: 180,
        backgroundColor: "#192734",
        borderWidth: 5,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        fontWeight: "bold",
        shadowColor: "gray",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 11,
        shadowRadius: 14,
        elevation: 3,
        overflow: "hidden",
        paddingVertical: 5,
        borderColor: "#192734",
    },
    cardTitle: {
        fontSize: 24,
        flexWrap: "nowrap",
        fontWeight: "900",
        textAlign: "right",
        color: "white",
        textTransform: "uppercase",
    },
    cardSubtitle: {
        fontSize: 12,
        fontWeight: "normal",
        textAlign: "right",
        color: "whitesmoke",
    },
    cardInfo: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 5,
    },
});
