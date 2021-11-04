import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosMenu } from "react-icons/io";

import { Card } from "../../components/Card";

import { usePokemons } from "../../Hooks/usePokemons";

import {
  Container,
  PokemonsList,
  Content,
  Header,
  Title,
} from "./Pokedex.styles";
export const Pokedex = () => {
  const { pokemons = [] } = usePokemons();
  return (
    <Container>
      <Content>
        <div>
          <Header>
            <Link to="/">
              <IoIosArrowRoundBack />
            </Link>
            <IoIosMenu />
          </Header>
          <Title>Pokedex</Title>
        </div>
        <PokemonsList>
          {pokemons.map((pokemon) => (
            <Card color="Grey" key={pokemon.name} to="">
              {pokemon.name}
              <img src={pokemon.imageURL} alt={pokemon.name} width="50%" />
            </Card>
          ))}
        </PokemonsList>
      </Content>
    </Container>
  );
};
