import { useState, useEffect } from 'react';

export const usePokemonData = (gen) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/generation/${gen}`);
        const result = await response.json();

        const pokemonDetails = await Promise.all(
          result.pokemon_species.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            const pokemonData = await response.json();

            const pokemonId = pokemonData.id;
            const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

            return {
              name: pokemonData.name,
              base_happiness: pokemonData.base_happiness,
              capture_rate: pokemonData.capture_rate,
              imageUrl,
            };
          })
        );

        setData(pokemonDetails);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [gen]);

  return data;
};