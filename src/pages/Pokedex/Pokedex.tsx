import React from "react";
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
  const [page, setPage] = React.useState(1);
  const observer = React.useRef<any>();
  const { pokemons, loading } = usePokemons(page);

  const checkLast = React.useCallback(
    (node) => {
      if (loading) {
        return;
      }

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        const [observedPokemon] = entries;

        if (observedPokemon.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

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
          {pokemons.map((pokemon, index) => (
            <Card
              color={`rgb(${pokemon.colors[2]})`}
              shadow={`rgb(${pokemon.colors[1]})`}
              key={pokemon.name}
              to=""
            >
              <PokeWrapper
                ref={pokemons.length - 1 === index ? checkLast : null}
              >
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
