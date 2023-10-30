import { Button, ImageBackground, TouchableNativeFeedback } from "react-native";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";

export function Header() {


    return (
        <View style={styles.header}>
            <View style={styles.headerInfo}>
                <View style={styles.title}>
                    <ImageBackground source={require('../pokemon-logo.png')} style={{ width: 200, height: 70 }} />
                </View>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.search} placeholder="Busca tu Pokemon"></TextInput>
                    <TouchableNativeFeedback>
                        <Text style={styles.buttonSearch}>Buscar</Text>
                    </TouchableNativeFeedback>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 15,
        backgroundColor: "red",
    },
    headerInfo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        gap: 15
    },
    searchContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        gap: 50,
    },
    search: {
        width: "80%",
        borderColor: "blue",
        borderWidth: 1,
        height: 40,
        backgroundColor: "white",
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,
    },
    buttonSearch: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#fbd743",
        borderColor: "blue",
        borderWidth: 1,
        color: "blue",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontWeight: "bold",
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
});