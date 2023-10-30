import { Text, View, StyleSheet, FlatList, ScrollView } from "react-native";
import { useFetch } from "../hooks/useFetch";

export function Home() {
    const { data } = useFetch("https://pokeapi.co/api/v2/generation/");

    return (
        <View>
            <Text style={Styles.title}>Selecciona una generación:</Text>
            <View style={Styles.generationContainer}>
                {data &&
                    data.results.map((generation) => (
                        <Text style={Styles.card} key={generation.url}>{generation.name}</Text>
                    ))}
            </View>
        </View>
    )
}


const Styles = StyleSheet.create({

    title: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 30,
        marginBottom: 20
    },
    generationContainer: {
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    card: {
        width: 180,
        height: 120,
        backgroundColor: "red",
        color: "white",
        textAlign: "center",
        borderRadius: 10,
        paddingTop: 40,
        fontSize: 23,
        fontWeight: "bold"
    }

});