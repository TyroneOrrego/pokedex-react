import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  background-color: #f6f7fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
`;

export const Content = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  display: grid;
  grid-gap: 40px;
  height: 100vh;
  padding: 32px;
  width: 100%;
  @media (min-width: 600px) {
    width: 500px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 56px 0;

  svg {
    transform: scale(2);
    cursor: pointer;

    path {
      fill: #404040;
    }
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: left;
  color: #6e6e6e;
`;

export const PokemonsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 65vh;
  overflow: hidden;
  overflow-y: auto;
`;

export const Image = styled.img`
  width: 100px;
`;

export const PokeWrapper = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  justify-content: space-between;
`;

export const PokemonName = styled.div`
  text-align: left;
`;

export const SkeletonsContainer = styled.div`
  grid-column: span 2;
  > span {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
`;
