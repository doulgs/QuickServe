import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ disabled, theme }) =>
    disabled ? "#999" : theme.Colors.Primary};
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
`;
