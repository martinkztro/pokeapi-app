import { View, Text, StyleSheet, FlatList } from "react-native";
import { useFetch } from "../hooks/useFetch";
import { Home } from "./Home";

export function Generation() {

    let gen = {Home}.idGeneration; //quitable

    const { data } = useFetch(`https://pokeapi.co/api/v2/generation/${gen}`);

    console.log('Comiendo' + gen) //quitable

    return (
        <View style={Styles.container}>
            <Text style={Styles.title}>{gen}</Text>
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
        fontSize: 35,
        textTransform: "uppercase",
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
        backgroundColor: "#ffffff",
        borderColor: "red",
        borderWidth: 2,
        color: "red",
        textAlign: "center",
        borderRadius: 10,
        paddingTop: 45,
        fontSize: 20,
        fontWeight: "bold"
    },


});