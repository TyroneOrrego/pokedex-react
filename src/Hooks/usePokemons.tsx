import React from "react";
import { pokeApi } from "../api";
import { GetPokemons, Result } from "../types";

interface Pokemon extends Result {
  imageURL: string;
}

export const usePokemons = () => {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>();
  React.useEffect(() => {
    pokeApi.get<GetPokemons>("/pokemon?limit=10&offset=0").then((response) => {
      const pokemonsFormatted = response.data.results.map((pokemon) => {
        const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
          pokemon.url.split("/")[pokemon.url.split("/").length - 2]
        }.png`;

        return { ...pokemon, imageURL };
      });

      setPokemons(pokemonsFormatted);
    });
  }, []);

  return {
    pokemons,
  };
};
