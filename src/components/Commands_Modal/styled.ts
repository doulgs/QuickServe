import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 0 24px;
  align-items: stretch;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = styled.View`
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.Colors.Background[50]};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonClose = styled.TouchableOpacity``;

export const Form = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput.attrs({ placeholderTextColor: "#999" })`
  border-radius: 8px;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.5);
  margin-bottom: 24px;
`;
