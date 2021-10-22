import { SearchInput } from "../../components/SearchInput";
import { Container, Content, SearchSection, Title } from "./Home.styles";

export const Home = () => {
  return (
    <Container>
      <Content>
        <SearchSection>
          <Title> What pokemon are you looking for?</Title>
          <SearchInput />
        </SearchSection>
      </Content>
    </Container>
  );
};
