import { ImageBackground, TouchableNativeFeedback } from "react-native";
import { Text, View, StyleSheet, TextInput } from "react-native";

export function Header() {


    return (
        <View style={styles.header}>
            <View style={styles.headerInfo}>
                <View style={styles.title}>
                    <ImageBackground source={require('../pokemon-logo.png')} style={{ width: 200, height: 70 }} />
                </View>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.search} placeholder="Busca tu Pokemon" placeholderTextColor="gray"></TextInput>
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
        padding: 20,
        backgroundColor: "#22303c",
        shadowColor: "black",
        shadowOffset: {
            width: 20,
            height: 10,
        },
        shadowOpacity: 10,
        shadowRadius: 12,
        elevation: 20,
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
        color: "black",
        fontFamily: "Roboto",
        fontWeight: "bold",
        backgroundColor: "#E1E8ED",
        borderColor: "#8899a6",
        borderWidth: .5,
        height: 40,
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 10,
    },
    buttonSearch: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#c51f5d",
        borderWidth: 2,
        color: "whitesmoke",
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