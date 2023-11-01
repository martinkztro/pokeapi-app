import { View, Text, StyleSheet } from 'react-native';
import { useFetch } from '../hooks/useFetch';



export default function Pokemon({ route, navigation }) {

    const { pokemon } = route.params;

    const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{pokemon}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#22303c',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 35,
        fontWeight: "900",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
        color: "white",
        textTransform: "uppercase",
    },
});