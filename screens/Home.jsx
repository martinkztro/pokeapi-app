import { View, Text, ScrollView, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useGenerationsData } from '../hooks/useFetchGenerationList';

export default function Home({ navigation }) {
  
  const data = useGenerationsData();

  return (
    <ScrollView style={Styles.container}>
      <ImageBackground source={require("../assets/bg-generation.jpg")} style={Styles.hero}>
        <View style={Styles.blackFilterHero}></View>
        <Text style={Styles.title}>Bienvenido</Text>
        <Text style={Styles.subTitle}>Selecciona una generación</Text>
      </ImageBackground>
      <View style={Styles.generationContainer}>
        {data &&
          data.map((generation, index) => (
            <TouchableOpacity
              key={index}
              style={Styles.card}
              onPress={() =>
                navigation.navigate("Generation", {
                  gen: generation.generationName,
                })
              }
            >
              <Text style={Styles.cardTitle}>{generation.generationName.replace(/tion-/, "ción ")}</Text>
              <Text style={Styles.cardSubtitle}>{generation.mainRegion}</Text>
            </TouchableOpacity>
          ))}
      </View>
    </ScrollView>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#22303c",
  },
  hero: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",

  },
  blackFilterHero: {
    backgroundColor: "#22303c",
    width: "100%",
    height: "100%",
    opacity: .4,
    position: "absolute",
    top: 0,
    left: 0
  },
  title: {
    fontSize: 55,
    fontWeight: "900",
    textAlign: "center",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 8,
    textTransform: "uppercase",
  },
  subTitle: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
    textShadowColor: "black",
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 8,
    textTransform: "uppercase",
    marginTop: 5,
  },
  generationContainer: {
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
    marginTop: 30,
  },
  card: {
    width: 180,
    height: 130,
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
    borderWidth: .5,
    color: "white",
    textAlign: "center",
    borderRadius: 10,
    padding: 12,
    paddingTop: 5,
  },
  cardTitle: {
    marginTop: 30,
    fontSize: 25,
    fontWeight: "300",
    textAlign: "center",
    color: "#d4d4d4",
    textTransform: "uppercase",
  },
  cardSubtitle: {
    fontSize: 12,
    marginTop: 10,
    fontWeight: "normal",
    color: "gray",
    textAlign: "right",
  },
});