import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export function PokemonDetails({ generation }) {
  return (
    <View style={styles.container}>
        {
          generation.pokemon_species.map((pokemon, index) => (
            <Text key={index}>{pokemon.name}</Text>
          ))
        }
    </View>
  );
}

const styles = StyleSheet.create({
  
});
