import { Link } from "react-router-dom";
import { IoIosArrowRoundBack, IoIosMenu } from "react-icons/io";
import Skeletons from "react-loading-skeleton";
import { Card } from "../../components/Card";

import { usePokemons } from "../../Hooks/usePokemons";

import {
  Container,
  PokemonsList,
  Content,
  Header,
  SkeletonsContainer,
  Image,
  PokeWrapper,
  PokemonName,
  Title,
} from "./Pokedex.styles";
export const Pokedex = () => {
  const { pokemons, loading = [] } = usePokemons();
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
        <SkeletonsContainer>
          {loading && <Skeletons count={10} style={{ height: 100 }} />}
        </SkeletonsContainer>
        <PokemonsList>
          {pokemons.map((pokemon) => (
            <Card
              color={`rgb(${pokemon.colors[2]})`}
              shadow={`rgb(${pokemon.colors[1]})`}
              key={pokemon.name}
              to=""
            >
              <PokeWrapper>
                <PokemonName>{pokemon.name}</PokemonName>
                <Image src={pokemon.imageURL} />
              </PokeWrapper>
            </Card>
          ))}
        </PokemonsList>
      </Content>
    </Container>
  );
};
