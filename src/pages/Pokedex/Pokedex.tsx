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
  const pokemons = usePokemons();
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
          <Card to="">hola</Card>
          <Card to="">hola</Card>
          <Card to="">hola</Card>
        </PokemonsList>
      </Content>
    </Container>
  );
};
