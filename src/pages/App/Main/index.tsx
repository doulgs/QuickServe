import { useState } from "react";
import { Button } from "../../../components/Button";
import { Categories } from "../../../components/Categories";
import { Header } from "../../../components/Header";
import { Menu } from "../../../components/Menu";
import { Commands_Modal } from "../../../components/Commands_Modal";
import {
  CategoryContainer,
  Container,
  Footer,
  FooterContainer,
  MenuContainer,
} from "./styles";

const Main: React.FC = () => {
  const [selectedCommand, setselectedCommand] = useState("");
  const [isCommandsModalVisble, setIsCommandsModalVisble] = useState(false);

  function handleCommandsModalVisible() {
    setIsCommandsModalVisble(!isCommandsModalVisble);
  }

  function handleSaveCommanda(command: string) {
    setselectedCommand(command);
  }
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
          {!selectedCommand && (
            <Button onPress={handleCommandsModalVisible}>Novo Pedido</Button>
          )}
        </FooterContainer>
      </Footer>

      <Commands_Modal
        visible={isCommandsModalVisble}
        changeVisibleModal={handleCommandsModalVisible}
        onSave={handleSaveCommanda}
      />
    </>
  );
};

export default Main;
