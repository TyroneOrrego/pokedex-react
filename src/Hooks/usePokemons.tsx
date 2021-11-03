import React from "react";
import { pokeApi } from "../api";

export const usePokemons = () => {
  React.useEffect(() => {
    pokeApi.get("/pokemon?limit=10&offset=0").then((response) => {
      console.log(response.data);
    });
  }, []);
};
