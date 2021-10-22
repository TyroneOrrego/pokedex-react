import styled, { StyledProps } from "styled-components";

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
  background-color: white;
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

export const SearchSection = styled.section`
  background-color: white;
  border-radius: 12px;
`;

export const Title = styled.h1`
  font-size: 30px;
  padding-top: 200px;
`;
