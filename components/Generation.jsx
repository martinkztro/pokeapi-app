import { View, Text, StyleSheet, FlatList, Button, ScrollView, Image, uri, ImageBackground, TouchableOpacity } from "react-native";
import { useFetch } from "../hooks/useFetch";


export default function Generation({route, navigation}) {

    
    const { gen } = route.params;
    
    const { data } = useFetch(`https://pokeapi.co/api/v2/generation/${gen}`);
    
    return (
        <ScrollView style={Styles.container}>
            <Text style={Styles.title}>{gen}</Text>
            <Text style={Styles.subtitle}>Selecciona un pokémon:</Text>
            <View style={Styles.listContainer}>
                { data &&
                    data.pokemon_species.map((pokemon, index) => (
                        <TouchableOpacity style={Styles.card} key={index}>
                            <Text style={Styles.cardTitle}>{pokemon.name}</Text>
                            <ImageBackground source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}} style={{ width: 120, height: 100 }} />
                        </TouchableOpacity>
                    ))
                }
            </View>
            
        </ScrollView>
    )
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },    
    title: {
        fontSize: 35,
        textTransform: "uppercase",
        fontWeight: "900",
        textAlign: "center",
        marginBottom: 10,
        marginTop: 22,
        color: "red"
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
        color: "red",
        textAlign: "center",
        borderRadius: 10,
        padding: 5,
        fontSize: 20,
        fontWeight: "bold",
        overflow: "hidden",
    },
    cardTitle: {
        fontSize: 28,
        flexWrap: "nowrap",
        fontWeight: "900",
        textAlign: "right",
        color: "white",
        textTransform: "uppercase",
    },


});