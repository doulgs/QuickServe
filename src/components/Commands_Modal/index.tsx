import { Keyboard, Platform } from "react-native";
import { Button } from "../Button";
import { Close } from "../Icons/Close";
import { Text } from "../Texts";
import {
  ButtonClose,
  Form,
  Header,
  Input,
  Modal,
  ModalBody,
  Overlay,
} from "./styled";
import { useState } from "react";

interface TableModalProps {
  visible: boolean;
  changeVisibleModal: () => void;
  onSave: (command: string) => void;
}

const Commands_Modal: React.FC<TableModalProps> = ({
  visible,
  changeVisibleModal,
  onSave,
}) => {
  const [commands, setCommands] = useState("");

  function handlePress() {
    Keyboard.dismiss();
    changeVisibleModal();
    onSave(commands);
    setCommands("");
  }

  return (
    <Modal
      transparent
      visible={visible}
      statusBarTranslucent
      animationType="fade"
    >
      <Overlay behavior={Platform.OS === "android" ? "height" : "padding"}>
        <ModalBody>
          <Header>
            <Text weight="700">Numero da comanda</Text>

            <ButtonClose onPress={changeVisibleModal}>
              <Close color="#666" />
            </ButtonClose>
          </Header>
          <Form>
            <Input
              placeholder="Numero da mesa"
              keyboardType="number-pad"
              value={commands}
              onChangeText={setCommands}
            />

            <Button onPress={handlePress} disabled={commands.length === 0}>
              Confirmar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
};

export { Commands_Modal };
