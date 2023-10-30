import { View, Text, StyleSheet, FlatList } from "react-native";
import { useFetch } from "../hooks/useFetch";

export function Generation( { gen } ) {

    const { data } = useFetch(`https://pokeapi.co/api/v2/generation/${gen}`);

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>Generación I</Text>
            <Text style={Styles.subtitle}>Selecciona un pokémon:</Text>
            <View style={Styles.listContainer}>
                { data &&
                    data.pokemon_species.map((pokemon) => (
                        <Text style={Styles.card} key={pokemon.url}>{pokemon.name}</Text>
                    ))
                }
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        alignItems: "center",
        marginTop: 30
    },    
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 10
    },
    subtitle: {
        fontSize: 18,
        fontWeight: "normal",
        textAlign: "center",
        marginBottom: 20
    },
    listContainer: {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginBottom: 20
    },
    card: {
        width: 180,
        height: 120,
        backgroundColor: "#cc0000",
        borderColor: "#3b4cca",
        borderWidth: 1,
        color: "white",
        textAlign: "center",
        borderRadius: 10,
        paddingTop: 45,
        fontSize: 20,
        fontWeight: "bold"
    },


});