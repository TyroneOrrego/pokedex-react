import React from "react";
import { prominent } from "color.js";
import { pokeApi } from "../api";
import { GetPokemons, Result } from "../types";

interface Pokemon extends Result {
  imageURL: string;
  colors: string[];
}

export const usePokemons = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [loading, setLoading] = React.useState<Boolean>(true);
  React.useEffect(() => {
    pokeApi
      .get<GetPokemons>("/pokemon?limit=10&offset=0")
      .then(async (response) => {
        const pokemonsFormatted = response.data.results.map((pokemon) => {
          const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            pokemon.url.split("/")[pokemon.url.split("/").length - 2]
          }.png`;

          return { ...pokemon, imageURL };
        });

        const ImagesColorsPromises = pokemonsFormatted.map((pokemon) => {
          return prominent(pokemon.imageURL);
        });

        const dominantColorResolved = await Promise.all(ImagesColorsPromises);

        const pokeColors = dominantColorResolved.map((colorArray: any) =>
          colorArray.map((colorValue: Number[]) => colorValue.join(","))
        );

        setPokemons((prevPokemons: any) => [
          ...prevPokemons,
          ...pokemonsFormatted.map((pokemon, index) => ({
            ...pokemon,
            colors: pokeColors[index],
          })),
        ]);
        setLoading(false);
      });
  }, []);

  return {
    pokemons,
    loading,
  };
};
