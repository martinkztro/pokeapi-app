import { Text, View, StyleSheet, TouchableNativeFeedback } from "react-native";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

function Home() {
    const { data } = useFetch("https://pokeapi.co/api/v2/generation/");
    const [idGeneration, setIdGeneration] = useState('serote'); //quitable el nombre de serote
    console.log(idGeneration); //quitable

    return (
        <View>
            <Text style={Styles.title}>Selecciona una generación:</Text>
            <View style={Styles.generationContainer}>
                {data &&
                    data.results.map((generation) => (
                        <TouchableNativeFeedback onPress={() => {setIdGeneration(generation.name)}}>
                            <Text style={Styles.card} key={generation.id}>{generation.name}</Text>
                        </TouchableNativeFeedback>
                    ))}
            </View>
        </View>
    )
}

export { Home }

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
    }

});