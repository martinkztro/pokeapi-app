import { useState, useEffect } from 'react';

export const useGenerationsData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/generation/");
        const result = await response.json();

        const generationsData = await Promise.all(
          result.results.map(async (generation) => {
            const response = await fetch(generation.url);
            const generationResult = await response.json();
            return {
              generationName: generation.name,
              mainRegion: generationResult.main_region.name,
            };
          })
        );

        setData(generationsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return data;
};