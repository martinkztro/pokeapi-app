import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useFetch } from "../hooks/useFetch";

export default function Pokemon({ route }) {
  const { pokemon } = route.params;

  const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  return (
    <ScrollView contentContainerStyle={Styles.contentContainer}>
      {data && data.id && (
        <View style={Styles.card}>
          <Text style={Styles.title}>{data.name}</Text>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            }}
            style={{ width: 150, height: 150 }}
          />
        </View>
      )}
      {data && data.id && (
        <ScrollView contentContainerStyle={Styles.contentContainer}>
          <View style={Styles.statsContainer}>
            <Text style={Styles.infoTitle}>Estadísticas</Text>
            <Text style={Styles.infoSubtitle}>HP: {data.stats[0].base_stat}</Text>
            <Text style={Styles.infoSubtitle}>
              Ataque: {data.stats[1].base_stat}
            </Text>
            <Text style={Styles.infoSubtitle}>
              Defensa: {data.stats[2].base_stat}
            </Text>
            <Text style={Styles.infoSubtitle}>
              Ataque especial: {data.stats[3].base_stat}
            </Text>
            <Text style={Styles.infoSubtitle}>
              Defensa especial: {data.stats[4].base_stat}
            </Text>
            <Text style={Styles.infoSubtitle}>
              Velocidad: {data.stats[5].base_stat}
            </Text>
          </View>
          <View style={Styles.infoContainer}>
            <Text style={Styles.infoTitle}>Información</Text>
            <Text style={Styles.infoSubtitle}>Peso: {data.weight} Kg</Text>
            <Text style={Styles.infoSubtitle}>Altura: {data.height} m</Text>
            <Text style={Styles.infoSubtitle}>
              Experiencia base: {data.base_experience}
            </Text>
          </View>
          <View style={Styles.abilityContainer}>
            <Text style={Styles.infoTitle}>Habilidades</Text>
            <View>
              {data &&
                data.abilities.map((item, index) => (
                  <Text style={Styles.infoSubtitle} key={index}>
                    {item.ability.name}
                  </Text>
                ))}
            </View>
          </View>
        </ScrollView>
      )}
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    backgroundColor: "#22303c",
  },
  title: {
    fontSize: 40,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 10,
    color: "white",
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "#22303c",
    width: "100%",
    padding: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 25,
    fontWeight: "900",
    color: "white",
    textTransform: "uppercase",
    textAlign: "left",
    marginBottom: 10,
  },
  infoSubtitle: {
    fontSize: 15,
    fontWeight: "300",
    color: "white",
    textTransform: "uppercase",
    textAlign: "center",
    marginBottom: 5,
  },
  statsContainer: {
    width: 360,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#192734",
    borderColor: "gray",
    shadowColor: "gray",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 0.5,
    color: "white",
    textAlign: "left",
    borderRadius: 10,
    padding: 10,
    paddingTop: 15,
    marginTop: 10
  },
  infoContainer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#192734",
    borderColor: "gray",
    shadowColor: "gray",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 0.5,
    color: "white",
    borderRadius: 10,
    padding: 10,
    paddingTop: 15,
    marginTop: 10
  },
  abilityContainer: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#192734",
    borderColor: "gray",
    shadowColor: "gray",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 4,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 0.5,
    color: "white",
    borderRadius: 10,
    padding: 10,
    paddingTop: 15,
    marginTop: 10,
    marginBottom: 30
  },
});