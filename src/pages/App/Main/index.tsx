import { Button } from "../../../components/Button";
import { Categories } from "../../../components/Categories";
import { Header } from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import {
  CategoryContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";

const Main: React.FC = () => {
  return (
    <>
      <Container>
        <Header />

        <CategoryContainer>
          <Categories />
        </CategoryContainer>

        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          <Button onPress={() => {}}>Novo Pedido</Button>
        </FooterContainer>
      </Footer>
    </>
  );
};

export default Main;
