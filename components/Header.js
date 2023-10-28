import { Button } from "react-native";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";

export function Header() {


    return (
        <View style={styles.header}>
            <View style={styles.headerInfo}>
                <Text style={styles.title}>Pokemon</Text>
                <View style={styles.searchContainer}>
                    <TextInput style={styles.search} placeholder="Busca tu Pokemon"></TextInput>
                    <Button style={styles.buttonSearch} title="Buscar" />
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
        marginBottom: 30,
        backgroundColor: "red"
    },
    headerInfo: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        gap: 10
    },
    searchContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap: 10,
    },
    search: {
        width: "80%",
        height: 40,
        borderColor: 'gray',
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
});