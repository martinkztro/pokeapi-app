import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { usePokemonData } from "../hooks/useFetchPokemonList";

export default function Generation({ route, navigation }) {
  const { gen } = route.params;

  const data = usePokemonData(gen);

  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.title}>{gen.replace(/tion-/, "ción ")}</Text>
      <Text style={Styles.subtitle}>Selecciona un pokémon:</Text>
      <View style={Styles.listContainer}>
        {data &&
          data.map((pokemon, index) => (
            <TouchableOpacity
              style={Styles.card}
              key={index}
              onPress={() =>
                navigation.navigate('Pokemon', {
                  pokemon: pokemon.name,
                })
              }
            >
              <View style={Styles.cardInfo}>
                <Image source={{ uri: pokemon.imageUrl }} style={Styles.cardImage} />
                <Text style={Styles.cardTitle}>{pokemon.name}</Text>
                <Text style={Styles.cardSubtitle}>Felicidad: {pokemon.base_happiness}</Text>
                <Text style={Styles.cardSubtitle}>Tasa de Captura: {pokemon.capture_rate}</Text>
              </View>
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
        fontSize: 20,
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
    cardImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
});