import styled from "styled-components/native";

export const Container = styled.View``;

export const ButtonCategory = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-width: 0.5px;
  margin: 4px ${(props) => props.theme.Size.sm} 4px 4px;
  border-radius: ${(props) => props.theme.Size.sm};
  background-color: ${(props) => props.theme.Colors.Background[50]};
`;
