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
  display: grid;
  grid-gap: 40px;
`;

export const Title = styled.h1`
  font-size: 30px;
  padding-top: 200px;
`;
export const NewsSection = styled.section`
  background-color: #f2f1f6;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  height: 100%;
  min-height: 300px;
  padding: 32px;
  padding-top: 40px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
