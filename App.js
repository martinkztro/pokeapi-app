import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import { PokemonDetails } from './PokemonDetails';

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedGeneration, setSelectedGeneration] = useState(null);

  useEffect(() => {
    // Realizar la solicitud a la API al cargar el componente
    fetch("https://pokeapi.co/api/v2/generation/")
      .then((response) => response.json())
      .then((responseData) => {
        // Actualizar el estado con los datos y detener la carga
        setData(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
        setLoading(false);
      });
  }, []);

  const handleGenerationClick = (generationName, generationURL) => {
    setLoading(true);
    axios.get(generationURL)
      .then((response) => {
        setSelectedGeneration(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la generación:", error);
        setLoading(false);
      });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : data ? (
        <View>
          {data.results.map((item, index) => (
            <Button
              key={index}
              title={item.name}
              onPress={() => handleGenerationClick(item.name, item.url)}
            />
          ))}
        </View>
      ) : (
        <Text>Ocurrió un error al cargar los datos de la API</Text>
      )}

      {selectedGeneration ? (
        <PokemonDetails generation={selectedGeneration} />
      ) : null}

      <StatusBar style="auto" />
    </View>
  );
}
